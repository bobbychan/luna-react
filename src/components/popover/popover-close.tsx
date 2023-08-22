import { Close } from '@radix-ui/react-popover';
import React from 'react';

export interface PopoverCloseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Close>, 'asChild'> {}

const PopoverClose = React.forwardRef<React.ElementRef<typeof Close>, PopoverCloseProps>(
  (props, forwardedRef) => <Close {...props} ref={forwardedRef} asChild />,
);

PopoverClose.displayName = Close.displayName;

export default PopoverClose;
