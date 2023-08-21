import classNames from 'classnames';
import React from 'react';

import { IComponentBaseProps } from '../../utils/types';

type ModalFooterProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps;

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    const classes = classNames('luna-modal-footer', className);
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
