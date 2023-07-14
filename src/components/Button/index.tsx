import { ElementType } from 'react';
import type { ButtonProps, GetTagProps } from './Button';
import { Button } from './Button';
import './button.css';

export { ButtonProps };
export default Button as <
  T extends ElementType = 'button',
  E extends HTMLElement = GetTagProps<T>['ele'],
  A extends React.HTMLAttributes<HTMLElement> = GetTagProps<T>['attr'],
>(
  props: ButtonProps<T, A> & { ref?: React.Ref<E> },
) => JSX.Element;
