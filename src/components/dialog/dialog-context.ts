import { DialogSlots, SlotsToClasses, dialog } from '../../theme';
import { createContext } from '../../utils/react-utils';

type DialogContextType = {
  slots: ReturnType<typeof dialog>;
  classNames?: SlotsToClasses<DialogSlots>;
  isOpen?: boolean;
  backdrop?: 'opaque' | 'blur' | 'transparent';
  scrollBehavior?: 'inside' | 'outside';
};

export const [DialogProvider, useDialogContext] = createContext<DialogContextType>({
  name: 'DialogContext',
  errorMessage:
    'useDialogContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dialog />`',
});
