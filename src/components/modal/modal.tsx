import { Overlay } from '@react-aria/overlays';
import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { forwardRef } from '../../utils/system';

import { ModalProvider } from './modal-context';
import { UseModalProps, useModal } from './use-modal';

export interface ModalProps extends UseModalProps {
  /**
   * The content of the modal. Usually the ModalContent
   */
  children: ReactNode;
}

const Modal = forwardRef<'div', ModalProps>((props, ref) => {
  const { children, ...otherProps } = props;
  const context = useModal({ ...otherProps, ref });

  const overlay = <Overlay portalContainer={context.portalContainer}>{children}</Overlay>;

  return (
    <ModalProvider value={context}>
      {context.disableAnimation && context.isOpen ? (
        overlay
      ) : (
        <AnimatePresence>{context.isOpen ? overlay : null}</AnimatePresence>
      )}
    </ModalProvider>
  );
});

Modal.displayName = 'Modal';

export default Modal;
