import { clsx } from 'clsx';
import { useEffect } from 'react';
import { useDOMRef } from '../../utils/react-utils';
import { forwardRef, HTMLProps } from '../../utils/system';

import { useModalContext } from './modal-context';

export interface ModalBodyProps extends HTMLProps<'div'> {}

const ModalBody = forwardRef<'div', ModalBodyProps>((props, ref) => {
  const { as, children, className, ...otherProps } = props;

  const { slots, classNames, bodyId, setBodyMounted } = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || 'div';

  /**
   * Notify us if this component was rendered or used,
   * so we can append `aria-labelledby` automatically
   */
  useEffect(() => {
    setBodyMounted(true);

    return () => setBodyMounted(false);
  }, [setBodyMounted]);

  return (
    <Component
      ref={domRef}
      className={slots.body({ class: clsx(classNames?.body, className) })}
      id={bodyId}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalBody.displayName = 'ModalBody';

export default ModalBody;
