import { Portal, SubContent } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '../../utils';
import { ScrollArea } from '../scroll-area';

export interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof SubContent> {
  container?: React.ComponentProps<typeof Portal>['container'];
}

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof SubContent>,
  DropdownMenuSubContentProps
>((props, ref) => {
  const { className, children, container, forceMount, ...subContentProps } = props;

  return (
    <Portal container={container} forceMount={forceMount}>
      <SubContent
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md bg-content1 p-1 text-foreground shadow-medium data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...subContentProps}
      >
        <ScrollArea type="auto">{children}</ScrollArea>
      </SubContent>
    </Portal>
  );
});

DropdownMenuSubContent.displayName = SubContent.displayName;

export default DropdownMenuSubContent;
