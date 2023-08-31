import { Close } from '@radix-ui/react-dialog';
import React from 'react';

export interface DialogCloseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Close>, 'asChild'> {}

const DialogClose = React.forwardRef<React.ElementRef<typeof Close>, DialogCloseProps>(
  (props, forwardedRef) => <Close {...props} ref={forwardedRef} asChild />,
);

DialogClose.displayName = Close.displayName;

export default DialogClose;
