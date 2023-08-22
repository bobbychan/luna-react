import { Root } from '@radix-ui/react-navigation-menu';
import React from 'react';
import { cn } from '../../utils';
import NavigationMenuViewport from './navigation-menu-viewport';

export interface NavigationMenuProps extends React.ComponentPropsWithoutRef<typeof Root> {
  wrapClassName?: string;
}

const NavigationMenu = React.forwardRef<React.ElementRef<typeof Root>, NavigationMenuProps>(
  (props, ref) => {
    const { children, className, wrapClassName, ...rest } = props;

    return (
      <Root
        ref={ref}
        className={cn('relative z-10 flex flex-1 items-center justify-center', className)}
        {...rest}
      >
        {children}
        <NavigationMenuViewport className={wrapClassName} />
      </Root>
    );
  },
);

NavigationMenu.displayName = Root.displayName;

export default NavigationMenu;
