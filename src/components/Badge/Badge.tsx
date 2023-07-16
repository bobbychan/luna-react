import classNames from 'classnames';
import React, { forwardRef } from 'react';
import {
  ComponentColor,
  ComponentSize,
  IComponentBaseProps,
} from '../../global/types';
import BadgeIcon from './BadgeIcon';

const classPrefix = 'luna-badge';

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    IComponentBaseProps {
  icon?: React.ReactNode;
  size?: ComponentSize;
  color?: ComponentColor;
  outline?: boolean;
  pill?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref): JSX.Element => {
    const {
      children,
      icon,
      size,
      color,
      outline,
      pill,
      dataTheme,
      className,
      ...rest
    } = props;

    const classes = classNames(classPrefix, className, {
      [`${classPrefix}-lg`]: size === 'lg',
      [`${classPrefix}-md`]: size === 'md',
      [`${classPrefix}-sm`]: size === 'sm',
      [`${classPrefix}-xs`]: size === 'xs',
      [`${classPrefix}-outline`]: outline,
      [`${classPrefix}-pill`]: pill,
      [`${classPrefix}-${color}`]: color,
    });

    return (
      <div
        aria-label="Badge"
        {...rest}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {icon && <BadgeIcon>{icon}</BadgeIcon>}
        {children}
      </div>
    );
  },
);

Badge.displayName = 'Badge';

export default Badge;
