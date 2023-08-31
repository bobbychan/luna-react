import { Viewport } from '@radix-ui/react-navigation-menu';
import React from 'react';
import { cn } from '../../utils/system';

export interface NavigationMenuViewportProps
  extends React.ComponentPropsWithoutRef<typeof Viewport> {}

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof Viewport>,
  NavigationMenuViewportProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div className="absolute w-full left-0 top-full flex justify-center">
      <Viewport
        ref={ref}
        className={cn(
          'origin-[top_center] bg-content1 text-foreground relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border dark:border-default shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...rest}
      />
    </div>
  );
});

NavigationMenuViewport.displayName = Viewport.displayName;

export default NavigationMenuViewport;
