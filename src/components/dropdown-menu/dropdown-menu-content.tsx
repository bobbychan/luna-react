import { Content, Portal } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '../../utils/system';
import { ScrollArea } from '../scroll-area';
import { DropdownMenuContentProvider } from './dropdown-menu-content-context';

type PropsWithoutRefOrColor<T extends React.ElementType> = Omit<
  React.ComponentPropsWithRef<T>,
  'color'
>;

type DropdownMenuContentContextValue = {
  dir?: 'ltr' | 'rtl';
  size?: '1' | '2' | '3' | '4' | '5' | '6';
  radius?: '1' | '2' | '3' | '4' | '5' | '6';
};

interface DropdownMenuContentProps
  extends PropsWithoutRefOrColor<typeof Content>,
    DropdownMenuContentContextValue {
  container?: React.ComponentProps<typeof Portal>['container'];
}

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  DropdownMenuContentProps
>((props, ref) => {
  const {
    className,
    children,
    sideOffset = 4,
    container,
    forceMount,
    size,
    radius,
    ...contentProps
  } = props;

  return (
    <Portal container={container} forceMount={forceMount}>
      <Content
        ref={ref}
        sideOffset={sideOffset}
        collisionPadding={10}
        className={cn(
          'flex flex-col min-w-[8rem] overflow-hidden rounded-md bg-content1 text-foreground shadow-medium max-h-[var(--radix-dropdown-menu-content-available-height)] origin-[var(--radix-dropdown-menu-content-transform-origin)]',
          className,
        )}
        {...contentProps}
      >
        <ScrollArea type="auto" scrollbars="both">
          <div className="p-2">
            <DropdownMenuContentProvider
              value={React.useMemo(() => ({ size, radius }), [size, radius])}
            >
              {children}
            </DropdownMenuContentProvider>
          </div>
        </ScrollArea>
      </Content>
    </Portal>
  );
});

DropdownMenuContent.displayName = Content.displayName;

export default DropdownMenuContent;
