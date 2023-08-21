import { useInteractions } from '@floating-ui/react';
import React from 'react';

interface DropdownContextValue {
  activeIndex: number | null;
  selectedIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
  handleSelect: (index: number | null) => void;
}

export const DropdownContext = React.createContext<DropdownContextValue>(
  {} as DropdownContextValue,
);

export const useDropdownContext = () => {
  const context = React.useContext(DropdownContext);

  if (context == null) {
    throw new Error('Dropdown components must be wrapped in <Dropdown />');
  }

  return context;
};
