import classNames from 'classnames';
import React, { forwardRef } from 'react';
import {
  ComponentColor,
  ComponentSize,
  IComponentBaseProps,
} from '../../global/types';

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  IComponentBaseProps & {
    size?: ComponentSize;
    color?: ComponentColor;
    variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  };

/**
 * Loading shows an animation to indicate that something is loading.
 */
export const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  (props, ref) => {
    const {
      size,
      color,
      variant = 'spinner',
      className,
      dataTheme,
      ...rest
    } = props;
    const classes = classNames('loading', className, {
      'loading-lg': size === 'lg',
      'loading-md': size === 'md',
      'loading-sm': size === 'sm',
      'loading-xs': size === 'xs',
      'loading-spinner': variant === 'spinner',
      'loading-dots': variant === 'dots',
      'loading-ring': variant === 'ring',
      'loading-ball': variant === 'ball',
      'loading-bars': variant === 'bars',
      'loading-infinity': variant === 'infinity',
      [`loading-${color}`]: color,
    });

    return (
      <span {...rest} ref={ref} data-theme={dataTheme} className={classes} />
    );
  },
);

Loading.displayName = 'Loading';
