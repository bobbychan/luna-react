import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { IComponentBaseProps } from '../../global/types';

const classPrefix = 'luna-divider';

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IComponentBaseProps {
  /**
   * The direction type of divider
   */
  type?: 'horizontal' | 'vertical';
  /**
   * Whether line is dashed
   */
  dashed?: boolean;
  style?: CSSProperties &
    Partial<
      Record<
        '--divider-gap' | '--divider-border-color' | '--divider-border-width',
        string
      >
    >;
}

/**
 * Dividers are used to visually separate content in a list or group.
 */
const Divider = ({
  type = 'horizontal',
  dashed,
  dataTheme,
  className,
  children,
  ...props
}: DividerProps): JSX.Element => {
  const classes = classNames(classPrefix, className, `${classPrefix}-${type}`, {
    [`${classPrefix}-dashed`]: dashed,
  });

  return (
    <div {...props} role="separator" data-theme={dataTheme} className={classes}>
      {children && type !== 'vertical' && (
        <div className={`${classPrefix}-content`}>{children}</div>
      )}
    </div>
  );
};

export default Divider;
