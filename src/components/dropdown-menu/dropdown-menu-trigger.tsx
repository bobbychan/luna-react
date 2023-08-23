import { Trigger } from '@radix-ui/react-dropdown-menu';
import React from 'react';

export interface DropdownMenuTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Trigger>, 'asChild'> {}

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  DropdownMenuTriggerProps
>((props, forwardedRef) => <Trigger {...props} ref={forwardedRef} asChild />);
DropdownMenuTrigger.displayName = Trigger.displayName;

export default DropdownMenuTrigger;
