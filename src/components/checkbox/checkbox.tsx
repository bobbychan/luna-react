import { VisuallyHidden } from '@react-aria/visually-hidden';
import { cloneElement, ReactElement } from 'react';
import { forwardRef } from '../../utils/system';

import { CheckboxIcon } from './checkbox-icon';
import { useCheckbox, UseCheckboxProps } from './use-checkbox';

export interface CheckboxProps extends UseCheckboxProps {}

const Checkbox = forwardRef<'input', CheckboxProps>((props, ref) => {
  const {
    Component,
    children,
    icon = <CheckboxIcon />,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getIconProps,
    getLabelProps,
  } = useCheckbox({
    ...props,
    ref,
  });

  const clonedIcon =
    typeof icon === 'function'
      ? icon(getIconProps())
      : cloneElement(icon as ReactElement, getIconProps());

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>{clonedIcon}</span>
      {children && <span {...getLabelProps()}>{children}</span>}
    </Component>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
