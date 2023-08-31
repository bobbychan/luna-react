import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import { Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { CircleIcon } from '../../utils/shared-icons';
import { cn } from '../../utils/system';

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioItem> {}

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <CircleIcon className="h-2 w-2 fill-current" />
        </ItemIndicator>
      </span>
      <Slottable>{children}</Slottable>
    </RadioItem>
  );
});
DropdownMenuRadioItem.displayName = RadioItem.displayName;

export default DropdownMenuRadioItem;
