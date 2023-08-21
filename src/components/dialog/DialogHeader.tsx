import classNames from 'classnames';
import React from 'react';

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    const classes = classNames('luna-dialog-header', className);

    return (
      <div {...rest} ref={ref} className={classes}>
        {children}
      </div>
    );
  },
);

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
