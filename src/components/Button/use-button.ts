import type { ReactNode } from 'react';
import type { ButtonVariantProps } from '../../theme';
import type { HTMLProps, PropGetter } from '../../utils';

import { MouseEventHandler, cloneElement, isValidElement, useCallback, useMemo } from 'react';
import { button } from '../../theme';
import { ReactRef, chain, useDOMRef } from '../../utils/react-utils';
import { dataAttr } from '../../utils/shared-utils';
import { LoaderProps } from '../loader';
import { useRipple } from '../ripple';

import { useButtonGroupContext } from './button-group-context';

interface Props extends HTMLProps<'button'> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   *  Whether the button should display a ripple effect on press.
   * @default false
   */
  disableRipple?: boolean;
  /**
   * The button start content.
   */
  startContent?: ReactNode;
  /**
   * The button end content.
   */
  endContent?: ReactNode;
  /**
   * Loader to display when loading.
   */
  loader?: ReactNode;
  /**
   * The loader placement.
   * @default "start"
   */
  loaderPlacement?: 'start' | 'end';
  /**
   * Whether the button should display a loading spinner.
   * @default false
   */
  isLoading?: boolean;
  /**
   * The native button click event handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type UseButtonProps = Props & Omit<ButtonVariantProps, 'isInGroup'>;

export function useButton(props: UseButtonProps) {
  const groupContext = useButtonGroupContext();
  const isInGroup = !!groupContext;

  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    loader,
    fullWidth = groupContext?.fullWidth ?? false,
    size = groupContext?.size ?? 'md',
    color = groupContext?.color ?? 'default',
    variant = groupContext?.variant ?? 'solid',
    disableAnimation = groupContext?.disableAnimation ?? false,
    radius = groupContext?.radius,
    disableRipple = groupContext?.disableRipple ?? false,
    isDisabled: isDisabledProp = groupContext?.isDisabled ?? false,
    isIconOnly = groupContext?.isIconOnly ?? false,
    isLoading = false,
    loaderPlacement = 'start',
    onClick,
    ...otherProps
  } = props;

  const Component = as || 'button';

  const domRef = useDOMRef(ref);

  const isDisabled = isDisabledProp || isLoading;

  const styles = useMemo(
    () =>
      button({
        size,
        color,
        variant,
        radius,
        fullWidth,
        isDisabled,
        isInGroup,
        disableAnimation,
        isIconOnly,
        className,
      }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className,
    ],
  );

  const { onClick: onRippleClickHandler, ripples } = useRipple();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disableRipple || isDisabled || disableAnimation) return;
      domRef.current && onRippleClickHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRippleClickHandler],
  );

  const getButtonProps: PropGetter = useCallback(
    (props = {}) => ({
      'data-disabled': dataAttr(isDisabled),
      'data-loading': dataAttr(isLoading),
      onClick: chain(onClick, handleClick),
      ...otherProps,
    }),
    [handleClick, isDisabled, isLoading, onClick, otherProps],
  );

  const getIconClone = (icon: ReactNode) =>
    isValidElement(icon)
      ? cloneElement(icon, {
          // @ts-ignore
          'aria-hidden': true,
          focusable: false,
          tabIndex: -1,
        })
      : null;

  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);

  const loaderSize = useMemo(() => {
    const buttonLoaderSizeMap: Record<string, LoaderProps['size']> = {
      sm: 'sm',
      md: 'sm',
      lg: 'md',
    };

    return buttonLoaderSizeMap[size];
  }, [size]);

  return {
    Component,
    children,
    domRef,
    ripples,
    loader,
    styles,
    startContent,
    endContent,
    isLoading,
    loaderPlacement,
    loaderSize,
    disableRipple,
    getButtonProps,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
