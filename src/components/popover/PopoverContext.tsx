import React from 'react';
import type { usePopover } from './Popover';

interface PopoverContextType extends ReturnType<typeof usePopover> {
  setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const PopoverContext = React.createContext<PopoverContextType | null>(
  null,
);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};
