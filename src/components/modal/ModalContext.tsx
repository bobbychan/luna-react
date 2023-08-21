import { createContext, useContext } from 'react';

type ModalContextType = {
  setHeaderId: React.Dispatch<React.SetStateAction<string | undefined>>;
  onClose?: () => void;
} | null;

export const ModalContext = createContext<ModalContextType>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'useModalContext must be used within a ModalContextProvider',
    );
  }
  return context;
};
