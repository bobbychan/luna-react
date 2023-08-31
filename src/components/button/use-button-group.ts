import type { ButtonGroupVariantProps } from '../../theme/components/button';
import type { ReactRef } from '../../utils/react-utils';
import type { HTMLProps, PropGetter } from '../../utils/system';
import type { ButtonProps } from './index';

import { useCallback, useMemo } from 'react';
import { buttonGroup } from '../../theme/components/button';
import { useDOMRef } from '../../utils/react-utils';
import { mapPropsVariants } from '../../utils/system';

interface Props extends HTMLProps, ButtonGroupVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isDisabled?: ButtonProps['isDisabled'];
}

export type ContextType = {
  size?: ButtonProps['size'];
  color?: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  radius?: ButtonProps['radius'];
  isDisabled?: ButtonProps['isDisabled'];
  disableAnimation?: ButtonProps['disableAnimation'];
  disableRipple?: ButtonProps['disableRipple'];
  isIconOnly?: ButtonProps['isIconOnly'];
  fullWidth?: boolean;
};

export type UseButtonGroupProps = Props &
  Partial<
    Pick<
      ButtonProps,
      'size' | 'color' | 'radius' | 'variant' | 'isIconOnly' | 'disableAnimation' | 'disableRipple'
    >
  >;

export function useButtonGroup(originalProps: UseButtonGroupProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, buttonGroup.variantKeys);

  const {
    ref,
    as,
    children,
    color = 'default',
    size = 'md',
    variant = 'solid',
    radius,
    isDisabled = false,
    disableAnimation = false,
    disableRipple = false,
    isIconOnly = false,
    className,
    ...otherProps
  } = props;

  const Component = as || 'div';

  const domRef = useDOMRef(ref);

  const classNames = useMemo(
    () => buttonGroup({ ...variantProps, className }),
    [className, variantProps],
  );

  const context = useMemo<ContextType>(
    () => ({
      size,
      color,
      variant,
      radius,
      isIconOnly,
      isDisabled,
      disableAnimation,
      disableRipple,
      fullWidth: !!originalProps?.fullWidth,
    }),
    [
      size,
      color,
      variant,
      radius,
      isDisabled,
      isIconOnly,
      disableAnimation,
      disableRipple,
      originalProps?.fullWidth,
    ],
  );

  const getButtonGroupProps: PropGetter = useCallback(
    () => ({
      role: 'group',
      ...otherProps,
    }),
    [otherProps],
  );

  return {
    Component,
    children,
    domRef,
    context,
    classNames,
    getButtonGroupProps,
  };
}

export type UseButtonGroupReturn = ReturnType<typeof useButtonGroup>;
