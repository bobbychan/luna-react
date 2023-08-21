import classNames from 'classnames';
import React from 'react';

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const classes = classNames('luna-modal-body', className);

  return (
    <div {...props} className={classes} ref={ref}>
      {children}
    </div>
  );
});

ModalBody.displayName = 'ModalBody';

export default ModalBody;
