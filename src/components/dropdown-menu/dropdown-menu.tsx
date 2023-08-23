import { Root } from '@radix-ui/react-dropdown-menu';
import React from 'react';

export interface DropdownMenuProps extends React.ComponentPropsWithoutRef<typeof Root> {}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  return <Root {...props} />;
};

DropdownMenu.displayName = Root.displayName;

export default DropdownMenu;
