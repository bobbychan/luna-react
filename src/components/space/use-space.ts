import type { SpaceVariantProps } from '../../theme';
import type { ReactRef } from '../../utils/react-utils';
import type { HTMLProps, PropGetter } from '../../utils/system';

import { useMemo } from 'react';
import { space } from '../../theme';
import { clsx, dataAttr } from '../../utils/shared-utils';
import { mapPropsVariants } from '../../utils/system';

export type SpaceSize = 'sm' | 'md' | 'lg' | 'xs' | number;

interface Props extends HTMLProps<'div'> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The space size
   * @default 'sm'
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
}

export type UseSpaceProps = Props & SpaceVariantProps;

const spaceSize = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};

export const getMargin = (size: SpaceSize) => {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
};

export function useSpace(originalProps: UseSpaceProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, space.variantKeys);

  const { as, children, className, size = 'sm', ...otherProps } = props;

  const Component = as || 'div';

  const styles = useMemo(
    () =>
      space({
        ...variantProps,
        className,
      }),
    [className, variantProps],
  );

  const [horizontalSize, verticalSize] = useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map((item) =>
        getMargin(item),
      ),
    [size],
  );

  const getSpaceProps: PropGetter = (props = {}) => ({
    ...props,
    ...otherProps,
    'aria-hidden': dataAttr(true),
    className: clsx(styles, props.className),
    style: {
      ...props.style,
      ...otherProps.style,
      columnGap: horizontalSize,
      rowGap: verticalSize,
    },
  });

  return { Component, children, getSpaceProps };
}

export type UseSpaceReturn = ReturnType<typeof useSpace>;
