import { forwardRef } from '../../utils';
import { Loader } from '../loader';
import { Ripple } from '../ripple';

import { UseButtonProps, useButton } from './use-button';

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    ripples,
    loaderSize,
    loader = <Loader color="current" size={loaderSize} />,
    loaderPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
  } = useButton({
    ...props,
    ref,
  });

  return (
    <Component ref={domRef} className={styles} {...getButtonProps()}>
      {startContent}
      {isLoading && loaderPlacement === 'start' && loader}
      {children}
      {isLoading && loaderPlacement === 'end' && loader}
      {endContent}
      {!disableRipple && <Ripple ripples={ripples} />}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
