import type { AlertVariantProps } from '../../theme/components/alert';
import type { HTMLProps } from '../../utils/system';

import { ReactNode, useMemo } from 'react';
import { alert } from '../../theme/components/alert';
import { forwardRef } from '../../utils/system';

export interface AlertProps extends HTMLProps<'div'> {
  icon?: ReactNode;
}

/**
 * Alert informs users about important events.
 */
const Alert = forwardRef<'div', AlertProps & AlertVariantProps>((props, ref) => {
  const { className, icon, variant, color, radius, children, ...rest } = props;

  const styles = useMemo(
    () =>
      alert({
        variant,
        color,
        radius,
        className,
      }),
    [className, color, radius, variant],
  );

  return (
    <div role="alert" {...rest} ref={ref} className={styles}>
      {icon}
      {children}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
