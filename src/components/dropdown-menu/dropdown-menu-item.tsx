import { Item } from '@radix-ui/react-dropdown-menu';
import { Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { cn } from '../../utils';

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
    color?: 'primary' | 'secondary' | 'accent';
    shortcut?: string;
  }
>((props, ref) => {
  const { className, children, inset, ...itemProps } = props;

  return (
    <Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-content2 focus:text-content2-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )}
      {...itemProps}
    >
      <Slottable>{children}</Slottable>
    </Item>
  );
});

DropdownMenuItem.displayName = Item.displayName;

export default DropdownMenuItem;
