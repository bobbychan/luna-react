import { Content } from '@radix-ui/react-navigation-menu';
import React from 'react';
import { cn } from '../../utils/system';

export interface NavigationMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  NavigationMenuContentProps
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <Content
      ref={ref}
      className={cn('left-0 top-0 w-full md:absolute md:w-auto', className)}
      {...rest}
    >
      {children}
    </Content>
  );
});

NavigationMenuContent.displayName = Content.displayName;

export default NavigationMenuContent;
