import { clsx } from 'clsx';
import { useEffect } from 'react';
import { useDOMRef } from '../../utils/react-utils';
import { forwardRef, HTMLProps } from '../../utils/system';

import { useModalContext } from './modal-context';

export interface ModalHeaderProps extends HTMLProps<'header'> {}

const ModalHeader = forwardRef<'header', ModalHeaderProps>((props, ref) => {
  const { as, children, className, ...otherProps } = props;

  const { slots, classNames, headerId, setHeaderMounted } = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || 'header';

  /**
   * Notify us if this component was rendered or used,
   * so we can append `aria-labelledby` automatically
   */
  useEffect(() => {
    setHeaderMounted(true);

    return () => setHeaderMounted(false);
  }, [setHeaderMounted]);

  return (
    <Component
      ref={domRef}
      className={slots.header({ class: clsx(classNames?.header, className) })}
      id={headerId}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
