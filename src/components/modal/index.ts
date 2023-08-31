import Modal from './modal';
import ModalBody from './modal-body';
import ModalContent from './modal-content';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';

// export types
export type { UseDisclosureProps } from '../../hooks/use-disclosure';
export type { ModalProps } from './modal';
export type { ModalBodyProps } from './modal-body';
export type { ModalContentProps } from './modal-content';
export type { ModalFooterProps } from './modal-footer';
export type { ModalHeaderProps } from './modal-header';

// export hooks
export { useDisclosure } from '../../hooks/use-disclosure';
export { useModal } from './use-modal';

// export context
export { ModalProvider, useModalContext } from './modal-context';

// export components
export { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader };
