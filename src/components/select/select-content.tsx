import { Content, Portal, Viewport } from '@radix-ui/react-select';
import React from 'react';
import { cn } from '../../utils/system';
import { useSelectContext } from './select-context';

export interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof Content> {
  container?: React.ComponentProps<typeof Portal>['container'];
}

const SelectContent = React.forwardRef<React.ElementRef<typeof Content>, SelectContentProps>(
  (props, ref) => {
    const {
      className,
      children,
      position = 'popper',
      sideOffset = 4,
      container,
      ...contentProps
    } = props;
    const { size } = useSelectContext();

    return (
      <Portal container={container}>
        <Content
          ref={ref}
          className={cn(
            'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-content1 text-foreground shadow-medium',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className,
          )}
          position={position}
          sideOffset={sideOffset}
          {...contentProps}
        >
          <Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
          >
            {children}
          </Viewport>
        </Content>
      </Portal>
    );
  },
);
SelectContent.displayName = Content.displayName;

export default SelectContent;
