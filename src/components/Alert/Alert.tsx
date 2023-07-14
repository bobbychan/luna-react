import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React, { ReactNode, forwardRef } from 'react';
import { ComponentStatus, IComponentBaseProps } from '../../global/types';

const classPrefix = 'luna-alert';

const iconRecord = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationCircleIcon,
  error: XCircleIcon,
};

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    icon?: ReactNode;
    status?: ComponentStatus;
    rounded?: boolean;
  };

interface IconNodeProps {
  status: AlertProps['status'];
  icon: AlertProps['icon'];
}

const IconNode: React.FC<IconNodeProps> = (props) => {
  const { status, icon } = props;
  const iconClassName = `${classPrefix}-icon`;
  const iconStatus = iconRecord[status!] || null;

  if (icon) {
    if (!React.isValidElement(icon)) {
      return <span className={iconClassName}>{icon}</span>;
    }

    return React.cloneElement(icon as React.ReactElement, {
      className: classNames(
        iconClassName,
        (icon as React.ReactElement).props.className,
      ),
    });
  }

  return iconStatus
    ? React.createElement(iconStatus, { className: iconClassName })
    : null;
};

/**
 * Alert informs users about important events.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { className, status, icon, dataTheme, children, ...rest } = props;
  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-info`]: status === 'info',
    [`${classPrefix}-success`]: status === 'success',
    [`${classPrefix}-warning`]: status === 'warning',
    [`${classPrefix}-error`]: status === 'error',
  });

  return (
    <div
      role="alert"
      {...rest}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    >
      <IconNode status={status} icon={icon} />
      {children}
    </div>
  );
});

Alert.displayName = 'Alert';
