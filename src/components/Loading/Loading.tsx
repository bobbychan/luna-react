import classNames from 'classnames';
import React, { forwardRef } from 'react';
import {
  ComponentColor,
  ComponentSize,
  IComponentBaseProps,
} from '../../global/types';

const classPrefix = 'luna-loading';

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  IComponentBaseProps & {
    size?: ComponentSize;
    color?: ComponentColor;
    variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  };

/**
 * Loading shows an animation to indicate that something is loading.
 */
const Loading = forwardRef<HTMLSpanElement, LoadingProps>((props, ref) => {
  const {
    size,
    color,
    variant = 'spinner',
    className,
    dataTheme,
    ...rest
  } = props;
  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-lg`]: size === 'lg',
    [`${classPrefix}-md`]: size === 'md',
    [`${classPrefix}-sm`]: size === 'sm',
    [`${classPrefix}-xs`]: size === 'xs',
    [`${classPrefix}-spinner`]: variant === 'spinner',
    [`${classPrefix}-dots`]: variant === 'dots',
    [`${classPrefix}-ring`]: variant === 'ring',
    [`${classPrefix}-ball`]: variant === 'ball',
    [`${classPrefix}-bars`]: variant === 'bars',
    [`${classPrefix}-infinity`]: variant === 'infinity',
    [`${classPrefix}-${color}`]: color,
  });

  return (
    <span {...rest} ref={ref} data-theme={dataTheme} className={classes} />
  );
});

Loading.displayName = 'Loading';

export default Loading;
