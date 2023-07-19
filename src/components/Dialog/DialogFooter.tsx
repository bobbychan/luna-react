import classNames from 'classnames';
import React from 'react';

import { IComponentBaseProps } from '../../global/types';

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps;

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ children, className, ...props }, ref) => {
    const classes = classNames('luna-dialog-footer', className);
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
