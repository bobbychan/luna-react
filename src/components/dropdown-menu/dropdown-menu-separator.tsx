import { Separator } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '../../utils/system';

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn('my-1 h-px bg-divider', className)} {...props} />
));
DropdownMenuSeparator.displayName = Separator.displayName;

export default DropdownMenuSeparator;
