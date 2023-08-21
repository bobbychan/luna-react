import classNames from 'classnames';
import React from 'react';

type DialogBodyProps = React.HTMLAttributes<HTMLDivElement>;

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ children, className, ...props }, ref) => {
    const classes = classNames('luna-dialog-body', className);

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

DialogBody.displayName = 'DialogBody';

export default DialogBody;
