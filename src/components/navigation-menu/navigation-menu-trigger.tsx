import { Trigger } from '@radix-ui/react-navigation-menu';
import React from 'react';

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {}

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  NavigationMenuTriggerProps
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <Trigger ref={ref} {...rest}>
      {children}
    </Trigger>
  );
});

NavigationMenuTrigger.displayName = Trigger.displayName;

export default NavigationMenuTrigger;
