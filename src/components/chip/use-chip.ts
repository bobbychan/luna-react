import type { ReactNode } from 'react';
import type { ChipSlots, ChipVariantProps, SlotsToClasses } from '../../theme';

import clsx from 'clsx';
import { cloneElement, isValidElement, useMemo } from 'react';
import { chip } from '../../theme';
import { HTMLProps, PropGetter, mapPropsVariants } from '../../utils';
import { ReactRef, useDOMRef } from '../../utils/react-utils';

export interface UseChipProps extends HTMLProps, ChipVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Avatar to be rendered in the left side of the chip.
   */
  avatar?: React.ReactNode;
  /**
   * Element to be rendered in the left side of the chip.
   * this props overrides the `avatar` prop.
   */
  startContent?: React.ReactNode;
  /**
   * Element to be rendered in the right side of the chip.
   * if you pass this prop and the `onClose` prop, the passed element
   * will have the close button props and it will be rendered instead of the
   * default close button.
   */
  endContent?: React.ReactNode;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Chip classNames={{
   *    base:"base-classes",
   *    dot: "dot-classes",
   *    content: "content-classes",
   *    avatar: "avatar-classes",
   *    closeButton: "close-button-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<ChipSlots>;
  /**
   * Callback fired when the chip is closed. if you pass this prop,
   * the chip will display a close button (endContent).
   * @param e MouseEvent
   */
  onClose?: HTMLProps<'span'>['onClick'];
}

export function useChip(originalProps: UseChipProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, chip.variantKeys);

  const {
    ref,
    as,
    children,
    avatar,
    startContent,
    endContent,
    onClose,
    classNames,
    className,
    ...otherProps
  } = props;

  const Component = as || 'div';

  const domRef = useDOMRef(ref);

  const baseStyles = clsx(classNames?.base, className);

  const isCloseable = !!onClose;
  const isDotVariant = originalProps.variant === 'dot';

  const isOneChar = useMemo(
    () => typeof children === 'string' && children?.length === 1,
    [children],
  );

  const hasStartContent = useMemo(() => !!avatar || !!startContent, [avatar, startContent]);
  const hasEndContent = useMemo(() => !!endContent || isCloseable, [endContent, isCloseable]);

  const slots = useMemo(
    () =>
      chip({
        ...variantProps,
        hasStartContent,
        hasEndContent,
        isOneChar,
        isCloseable,
      }),
    [variantProps, hasStartContent, hasEndContent, isOneChar, isCloseable],
  );

  const getChipProps: PropGetter = () => {
    return {
      ref: domRef,
      className: slots.base({ class: baseStyles }),
      ...otherProps,
    };
  };

  const getCloseButtonProps: PropGetter = () => {
    return {
      role: 'button',
      tabIndex: 0,
      className: clsx('chip-close-button', slots.closeButton({ class: classNames?.closeButton })),
      onClick: onClose,
    };
  };

  const getAvatarClone = (avatar: ReactNode) => {
    if (!isValidElement(avatar)) return null;

    return cloneElement(avatar, {
      // @ts-ignore
      className: slots.avatar({ class: classNames?.avatar }),
    });
  };

  const getContentClone = (content: ReactNode) =>
    isValidElement(content)
      ? cloneElement(content, {
          // @ts-ignore
          className: clsx('max-h-[80%]', content.props.className),
        })
      : null;

  return {
    Component,
    children,
    slots,
    classNames,
    isDot: isDotVariant,
    isCloseable,
    startContent: getAvatarClone(avatar) || getContentClone(startContent),
    endContent: getContentClone(endContent),
    getCloseButtonProps,
    getChipProps,
  };
}

export type UseChipReturn = ReturnType<typeof useChip>;
