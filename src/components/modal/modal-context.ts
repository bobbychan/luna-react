import { createContext } from '../../utils/react-utils';

import { UseModalReturn } from './use-modal';

export const [ModalProvider, useModalContext] = createContext<UseModalReturn>({
  name: 'ModalContext',
  errorMessage:
    'useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`',
});
