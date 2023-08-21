import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React, { useCallback, useRef } from 'react';
import { IComponentBaseProps } from '../../utils/types';
import { Button } from '../button';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';

export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement>, IComponentBaseProps {
  open?: boolean;
  closeOnOverlayClick?: boolean;
  closeIcon?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const classPrefix = 'luna-dialog';

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>((props, ref): JSX.Element => {
  const {
    children,
    open,
    closeOnOverlayClick = true,
    closeIcon = true,
    size,
    dataTheme,
    className,
    ...rest
  } = props;

  const containerClasses = classNames(classPrefix, {
    [`${classPrefix}-open`]: open,
  });
  const bodyClasses = classNames(`${classPrefix}-box`, className, {
    [`${classPrefix}-box-${size}`]: size,
  });

  return (
    <dialog
      {...rest}
      aria-label="Modal"
      aria-hidden={!open}
      aria-modal={open}
      open={open}
      data-theme={dataTheme}
      className={containerClasses}
      ref={ref}
    >
      <form method="dialog" data-theme={dataTheme} className={bodyClasses}>
        {closeIcon && (
          <Button
            color="ghost"
            size="sm"
            shape="circle"
            endIcon={<XMarkIcon />}
            className={`${classPrefix}-close-icon`}
          />
        )}
        {children}
      </form>
      {closeOnOverlayClick && (
        <form method="dialog" className={`${classPrefix}-overlay`}>
          <button style={{ cursor: 'auto' }}>close</button>
        </form>
      )}
    </dialog>
  );
});

Dialog.displayName = 'Dialog';

const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleShow = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleHide = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const NewDialog = ({ children, ...props }: DialogProps) => {
    return (
      <Dialog {...props} ref={dialogRef}>
        {children}
      </Dialog>
    );
  };

  return { Dialog: NewDialog, handleShow, handleHide, dialogRef };
};

export default Object.assign(Dialog, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  useDialog,
});
