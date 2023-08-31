import { Indicator } from '@radix-ui/react-navigation-menu';
import React from 'react';
import { cn } from '../../utils/system';

export interface NavigationMenuIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof Indicator> {}

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof Indicator>,
  NavigationMenuIndicatorProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <Indicator
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-2.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...rest}
    >
      <div className="bg-content1 relative top-[70%] h-2.5 w-2.5 rotate-45 rounded-tl-sm shadow-md" />
    </Indicator>
  );
});

NavigationMenuIndicator.displayName = Indicator.displayName;

export default NavigationMenuIndicator;
