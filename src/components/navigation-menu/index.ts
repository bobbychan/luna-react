import { Item, Link } from '@radix-ui/react-navigation-menu';

import NavigationMenu from './navigation-menu';
import NavigationMenuContent from './navigation-menu-content';
import NavigationMenuIndicator from './navigation-menu-indicator';
import NavigationMenuList from './navigation-menu-list';
import NavigationMenuTrigger from './navigation-menu-trigger';

// export types
export type { NavigationMenuProps } from './navigation-menu';
export type { NavigationMenuContentProps } from './navigation-menu-content';
export type { NavigationMenuListProps } from './navigation-menu-list';
export type { NavigationMenuTriggerProps } from './navigation-menu-trigger';

// export components
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  Item as NavigationMenuItem,
  Link as NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
};
