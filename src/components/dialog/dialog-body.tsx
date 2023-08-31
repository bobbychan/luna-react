import { useDOMRef } from '../../utils/react-utils';
import { clsx } from '../../utils/shared-utils';
import { forwardRef, HTMLProps } from '../../utils/system';
import { useDialogContext } from './dialog-context';

export interface DialogBodyProps extends HTMLProps<'div'> {}

const DialogBody = forwardRef<'div', DialogBodyProps>((props, ref) => {
  const { as, children, className, ...otherProps } = props;

  const { slots, classNames } = useDialogContext();

  const domRef = useDOMRef(ref);

  const Component = as || 'div';

  return (
    <Component
      ref={domRef}
      className={slots.body({ class: clsx(classNames?.body, className) })}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

DialogBody.displayName = 'DialogBody';

export default DialogBody;
