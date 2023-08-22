import { Root } from '@radix-ui/react-popover';
import React from 'react';

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof Root> {}

const Popover: React.FC<PopoverProps> = (props: PopoverProps) => <Root {...props} />;

Popover.displayName = Root.displayName;

export default Popover;
