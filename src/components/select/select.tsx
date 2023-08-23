import { Root } from '@radix-ui/react-select';
import React from 'react';
import { SelectProvider } from './select-context';

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof Root> {
  size?: 'sm' | 'md' | 'lg';
}
const Select: React.FC<SelectProps> = (props) => {
  const { children, size, ...rootProps } = props;
  return (
    <Root {...rootProps}>
      <SelectProvider value={React.useMemo(() => ({ size }), [size])}>{children}</SelectProvider>
    </Root>
  );
};

Select.displayName = Root.displayName;

export default Select;
