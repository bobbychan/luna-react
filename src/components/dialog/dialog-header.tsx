import { useDOMRef } from '../../utils/react-utils';
import { clsx } from '../../utils/shared-utils';
import { forwardRef, HTMLProps } from '../../utils/system';
import { useDialogContext } from './dialog-context';

export interface ModalHeaderProps extends HTMLProps<'header'> {}

const DialogHeader = forwardRef<'header', ModalHeaderProps>((props, ref) => {
  const { as, children, className, ...otherProps } = props;

  const { slots, classNames } = useDialogContext();

  const domRef = useDOMRef(ref);

  const Component = as || 'header';

  return (
    <Component
      ref={domRef}
      className={slots.header({ class: clsx(classNames?.header, className) })}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
