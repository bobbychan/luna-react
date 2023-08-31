import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select';
import React from 'react';
import { CheckIcon } from '../../utils/shared-icons';
import { cn } from '../../utils/system';

export interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Item> {}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>((props, ref) => {
  const { className, children, ...itemProps } = props;

  return (
    <Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-content2 focus:text-content2-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...itemProps}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </ItemIndicator>
      </span>

      <ItemText>{children}</ItemText>
    </Item>
  );
});

SelectItem.displayName = Item.displayName;

export default SelectItem;
