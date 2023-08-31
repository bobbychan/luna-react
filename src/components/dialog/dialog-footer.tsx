import { useDOMRef } from '../../utils/react-utils';
import { clsx } from '../../utils/shared-utils';
import { forwardRef, HTMLProps } from '../../utils/system';
import { useDialogContext } from './dialog-context';

export interface DialogFooterProps extends HTMLProps<'footer'> {}

const DialogFooter = forwardRef<'footer', DialogFooterProps>((props, ref) => {
  const { as, children, className, ...otherProps } = props;

  const { slots, classNames } = useDialogContext();

  const domRef = useDOMRef(ref);

  const Component = as || 'footer';

  return (
    <Component
      ref={domRef}
      className={slots.footer({ class: clsx(classNames?.footer, className) })}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
