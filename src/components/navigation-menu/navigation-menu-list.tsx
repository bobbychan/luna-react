import { List } from '@radix-ui/react-navigation-menu';
import React from 'react';

export interface NavigationMenuListProps extends React.ComponentPropsWithoutRef<typeof List> {}

const NavigationMenuList = React.forwardRef<React.ElementRef<typeof List>, NavigationMenuListProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return <List ref={ref} className={className} {...rest} />;
  },
);

NavigationMenuList.displayName = List.displayName;

export default NavigationMenuList;
