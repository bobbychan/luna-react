import { Trigger } from '@radix-ui/react-dialog';
import React from 'react';

export interface DialogTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Trigger>, 'asChild'> {}

const DialogTrigger = React.forwardRef<React.ElementRef<typeof Trigger>, DialogTriggerProps>(
  (props, forwardedRef) => <Trigger {...props} ref={forwardedRef} asChild />,
);

DialogTrigger.displayName = Trigger.displayName;

export default DialogTrigger;
