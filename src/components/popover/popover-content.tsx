import { Content, Portal } from '@radix-ui/react-popover';
import React from 'react';
import { cn } from '../../utils';

export interface PopoverContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Content>, 'asChild'> {
  container?: React.ComponentProps<typeof Portal>['container'];
}

const PopoverContent = React.forwardRef<React.ElementRef<typeof Content>, PopoverContentProps>(
  (props, ref) => {
    const { className, forceMount, container, ...contentProps } = props;
    return (
      <Portal container={container} forceMount={forceMount}>
        <Content
          align="center"
          sideOffset={8}
          collisionPadding={10}
          {...contentProps}
          ref={ref}
          className={cn(
            'z-50 relative bg-content1 text-foreground rounded-md shadow-medium p-4 outline-none',
            className,
          )}
        />
      </Portal>
    );
  },
);

PopoverContent.displayName = Content.displayName;

export default PopoverContent;
