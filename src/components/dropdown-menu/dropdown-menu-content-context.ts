import { createContext } from '../../utils/react-utils';

export const [DropdownMenuContentProvider, useDropdownMenuContentContext] = createContext({
  name: 'DropdownMenuContentContext',
  errorMessage:
    'useDropdownMenuContentContext: `context` is undefined. Seems you forgot to wrap all dropdwon components within `<DropdownMenuContent />`',
});
