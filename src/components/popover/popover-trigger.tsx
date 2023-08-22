import { Trigger } from '@radix-ui/react-popover';
import React from 'react';

export interface PopoverTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Trigger>, 'asChild'> {}

const PopoverTrigger = React.forwardRef<React.ElementRef<typeof Trigger>, PopoverTriggerProps>(
  (props, ref) => <Trigger ref={ref} {...props} asChild />,
);

PopoverTrigger.displayName = Trigger.displayName;

export default PopoverTrigger;
