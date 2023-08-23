import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { cn } from '../../utils';
import { CheckIcon } from '../../utils/shared-icons';

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxItem> {}

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ItemIndicator>
    </span>
    <Slottable>{children}</Slottable>
  </CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;

export default DropdownMenuCheckboxItem;
