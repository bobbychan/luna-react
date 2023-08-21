/**
 * Set components spacing,avoid components clinging together and set a unified space.
 */

import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React from 'react';
import { ComponentSize } from '../../utils/types';

const classPrefix = 'luna-space';

export type SpaceSize = ComponentSize | number;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set direction of layout
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Align the items on the cross axis.
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * Align the items on the main axis.
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /**
   * The space size
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * Should render as block element.
   */
  block?: boolean;
  /**
   * Should line break automatically, work only with horizontal.
   */
  warp?: boolean;
  /**
   * The split element
   */
  split?: React.ReactNode;
  children?: React.ReactNode;
  // style?: CSSProperties &
  //   Partial<Record<'--gap' | '--gap-vertical' | '--gap-horizontal', string>>;
}

const spaceSize = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};

function getNumberSize(size: SpaceSize) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    direction = 'horizontal',
    align,
    justify,
    block,
    size = 'sm',
    warp = false,
    split,
    className,
    style,
    children,
    ...rest
  } = props;

  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map((item) =>
        getNumberSize(item),
      ),
    [size],
  );

  const classes = classNames(classPrefix, `${classPrefix}-${direction}`, className, {
    [`${classPrefix}-wrap`]: warp,
    [`${classPrefix}-block`]: block,
    [`${classPrefix}-align-${align}`]: !!align,
    [`${classPrefix}-justify-${justify}`]: !!justify,
  });

  const gapStyle: CSSProperties = {
    columnGap: horizontalSize,
    rowGap: verticalSize,
  };

  return (
    <div
      ref={ref}
      className={classes}
      style={{
        ...gapStyle,
        ...style,
      }}
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        return (
          React.isValidElement(child) && (
            <>
              <div className={`${classPrefix}-item`}>{child}</div>
              {split && index !== React.Children.count(children) - 1 && (
                <span className={`${classPrefix}-item-split`}>{split}</span>
              )}
            </>
          )
        );
      })}
    </div>
  );
});

Space.displayName = 'Space';

export default Space;
