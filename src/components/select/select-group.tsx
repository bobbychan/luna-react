import { Group } from '@radix-ui/react-select';
import React from 'react';

export interface SelectGroupProps extends React.ComponentPropsWithoutRef<typeof Group> {}

const SelectGroup = React.forwardRef<React.ElementRef<typeof Group>, SelectGroupProps>(
  ({ className, ...props }, ref) => <Group ref={ref} className={className} {...props} />,
);
SelectGroup.displayName = Group.displayName;

export default SelectGroup;
