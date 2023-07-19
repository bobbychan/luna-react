import classNames from 'classnames';
import React, { useId, useLayoutEffect } from 'react';
import { useModalContext } from './ModalContext';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  as?: React.ElementType;
}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (props, ref) => {
    const { children, className, id, as: Component = 'div', ...rest } = props;
    const innerHeaderId = useId();
    const headerId = id || innerHeaderId;
    const classes = classNames('luna-modal-header', className);
    const { setHeaderId } = useModalContext();

    useLayoutEffect(() => {
      setHeaderId(headerId);

      return () => setHeaderId(undefined);
    }, [headerId, setHeaderId]);

    return (
      <Component {...rest} ref={ref} className={classes} id={headerId}>
        {children}
      </Component>
    );
  },
);

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
