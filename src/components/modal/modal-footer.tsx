import { clsx } from 'clsx';
import { useDOMRef } from '../../utils/react-utils';
import { forwardRef, HTMLProps } from '../../utils/system';

import { useModalContext } from './modal-context';

export interface ModalFooterProps extends HTMLProps<'footer'> {}

const ModalFooter = forwardRef<'footer', ModalFooterProps>((props, ref) => {
  const { as, children, className, ...otherProps } = props;

  const { slots, classNames } = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || 'footer';

  return (
    <Component
      ref={domRef}
      className={slots.footer({ class: clsx(classNames?.footer, className) })}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
