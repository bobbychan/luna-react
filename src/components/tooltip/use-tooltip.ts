import type { OverlayTriggerProps } from '@react-types/overlays';
import type { AriaTooltipProps } from '@react-types/tooltip';
import type { HTMLMotionProps } from 'framer-motion';
import type { PopoverVariantProps, SlotsToClasses } from '../../theme';
import type { OverlayOptions } from '../../utils/aria-utils';

import { AriaOverlayProps, useOverlay, useOverlayPosition } from '@react-aria/overlays';
import { useTooltip as useReactAriaTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import { ReactNode, Ref, useCallback, useId, useImperativeHandle, useMemo, useRef } from 'react';
import { popover } from '../../theme';
import { getArrowPlacement, toReactAriaPlacement } from '../../utils/aria-utils';
import { ReactRef, createDOMRef, mergeRefs } from '../../utils/react-utils';
import { clsx, dataAttr } from '../../utils/shared-utils';
import { HTMLProps, PropGetter, mapPropsVariants } from '../../utils/system';

interface Props extends Omit<HTMLProps, 'content'> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The children to render. Usually a trigger element.
   */
  children?: ReactNode;
  /**
   * The content of the tooltip.
   */
  content?: string | React.ReactNode;
  /**
   * Whether the tooltip should be disabled, independent from the trigger.
   */
  isDisabled?: boolean;
  /**
   * The delay time in ms for the tooltip to show up.
   * @default 0
   */
  delay?: number;
  /**
   * The delay time in ms for the tooltip to hide.
   * @default 500
   */
  closeDelay?: number;
  /**
   * By default, opens for both focus and hover. Can be made to open only for focus.
   */
  trigger?: 'focus';
  /**
   * The props to modify the framer motion animation. Use the `variants` API to create your own animation.
   */
  motionProps?: HTMLMotionProps<'div'>;
  /**
   * The container element in which the overlay portal will be placed.
   * @default document.body
   */
  portalContainer?: Element;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Tooltip classNames={{
   *    base:"base-classes",
   *    arrow: "arrow-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<'base' | 'arrow'>;
}

export type UseTooltipProps = Props &
  AriaTooltipProps &
  AriaOverlayProps &
  OverlayTriggerProps &
  OverlayOptions &
  PopoverVariantProps;

export function useTooltip(originalProps: UseTooltipProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);

  const {
    ref,
    as,
    isOpen: isOpenProp,
    content,
    children,
    defaultOpen,
    onOpenChange,
    isDisabled,
    trigger: triggerAction,
    shouldFlip = true,
    containerPadding = 12,
    placement: placementProp = 'top',
    delay = 0,
    closeDelay = 500,
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    isDismissable,
    shouldCloseOnBlur = true,
    portalContainer,
    isKeyboardDismissDisabled = false,
    shouldCloseOnInteractOutside,
    className,
    onClose,
    motionProps,
    classNames,
    ...otherProps
  } = props;

  const Component = as || 'div';

  const state = useTooltipTriggerState({
    delay,
    closeDelay,
    isDisabled,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange: (isOpen) => {
      onOpenChange?.(isOpen);
      if (!isOpen) {
        onClose?.();
      }
    },
  });

  const triggerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const tooltipId = useId();

  const isOpen = state.isOpen && !isDisabled;

  // Sync ref with overlayRef from passed ref.
  useImperativeHandle(ref, () =>
    // @ts-ignore
    createDOMRef(overlayRef),
  );

  const { triggerProps, tooltipProps: triggerTooltipProps } = useTooltipTrigger(
    {
      isDisabled,
      trigger: triggerAction,
    },
    state,
    triggerRef,
  );

  const { tooltipProps } = useReactAriaTooltip(
    {
      isOpen,
      ...mergeProps(props, triggerTooltipProps),
    },
    state,
  );

  const {
    overlayProps: positionProps,
    arrowProps,
    placement,
  } = useOverlayPosition({
    isOpen: isOpen,
    targetRef: triggerRef,
    placement: toReactAriaPlacement(placementProp),
    overlayRef,
    offset: showArrow ? offset + 3 : offset,
    crossOffset,
    shouldFlip,
    containerPadding,
  });

  const { overlayProps } = useOverlay(
    {
      isOpen: isOpen,
      onClose: state.close,
      isDismissable,
      shouldCloseOnBlur,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside,
    },
    overlayRef,
  );

  const slots = useMemo(
    () =>
      popover({
        ...variantProps,
        radius: originalProps?.radius ?? 'md',
        size: originalProps?.size ?? 'md',
        shadow: originalProps?.shadow ?? 'sm',
      }),
    [
      ...Object.values(variantProps),
      originalProps?.radius,
      originalProps?.size,
      originalProps?.shadow,
    ],
  );

  const baseStyles = clsx(classNames?.base, className);

  const getTriggerProps = useCallback<PropGetter>(
    (props = {}, _ref: Ref<any> | null | undefined = null) => ({
      ...mergeProps(triggerProps, props),
      ref: mergeRefs(_ref, triggerRef),
      'aria-describedby': isOpen ? tooltipId : undefined,
    }),
    [triggerProps, isOpen, tooltipId, state],
  );

  const getTooltipProps = useCallback<PropGetter>(
    () => ({
      ref: overlayRef,
      'data-open': dataAttr(isOpen),
      'data-disabled': dataAttr(isDisabled),
      'data-placement': getArrowPlacement(placement, placementProp),
      className: slots.base({ class: baseStyles }),
      ...mergeProps(tooltipProps, overlayProps, otherProps),
      style: mergeProps(positionProps.style, otherProps.style, props.style),
      id: tooltipId,
    }),
    [
      baseStyles,
      overlayProps,
      otherProps,
      overlayRef,
      positionProps,
      slots,
      tooltipId,
      tooltipProps,
    ],
  );

  const getArrowProps = useCallback<PropGetter>(
    () => ({
      className: slots.arrow({ class: classNames?.arrow }),
      'data-placement': getArrowPlacement(placement, placementProp),
      ...arrowProps,
    }),
    [arrowProps, placement, placementProp, slots, classNames],
  );

  return {
    Component,
    content,
    children,
    isOpen,
    triggerRef,
    showArrow,
    portalContainer,
    placement: placementProp,
    disableAnimation: originalProps?.disableAnimation,
    isDisabled,
    motionProps,
    getTriggerProps,
    getTooltipProps,
    getArrowProps,
  };
}

export type UseTooltipReturn = ReturnType<typeof useTooltip>;
