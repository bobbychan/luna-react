import { Separator } from '@radix-ui/react-select';
import React from 'react';
import { cn } from '../../utils';

export interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<typeof Separator> {}

const SelectSeparator = React.forwardRef<React.ElementRef<typeof Separator>, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('my-1 h-px bg-divider', className)} {...props} />
  ),
);
SelectSeparator.displayName = Separator.displayName;

export default SelectSeparator;
