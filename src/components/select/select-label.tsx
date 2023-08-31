import { Label } from '@radix-ui/react-select';
import React from 'react';
import { cn } from '../../utils/system';

export interface SelectLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {}

const SelectLabel = React.forwardRef<React.ElementRef<typeof Label>, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      {...props}
    />
  ),
);
SelectLabel.displayName = Label.displayName;

export default SelectLabel;
