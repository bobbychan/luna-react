import { Description } from '@radix-ui/react-dialog';
import React from 'react';
import { cn } from '../../utils/system';

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description ref={ref} className={cn('text-sm text-foreground-400', className)} {...props} />
));

DialogDescription.displayName = Description.displayName;

export default DialogDescription;
