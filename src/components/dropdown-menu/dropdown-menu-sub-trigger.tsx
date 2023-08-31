import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { cn } from '../../utils/system';

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof SubTrigger>,
  React.ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-content2 data-[state=open]:bg-content2',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    <Slottable>{children}</Slottable>
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </SubTrigger>
));

DropdownMenuSubTrigger.displayName = SubTrigger.displayName;

export default DropdownMenuSubTrigger;
