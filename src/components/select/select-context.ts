import { createContext } from '../../utils/react-utils';

export type SelectContextValues = {
  size?: 'sm' | 'md' | 'lg';
};

export const [SelectProvider, useSelectContext] = createContext<SelectContextValues>({
  name: 'SelectContext',
  errorMessage:
    'useSelectContext: `context` is undefined. Seems you forgot to wrap all select components within `<Select />`',
});
