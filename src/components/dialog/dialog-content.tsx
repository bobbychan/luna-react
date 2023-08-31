import { Content, Portal } from '@radix-ui/react-dialog';
import React from 'react';
import { clsx } from '../../utils/shared-utils';
import { useDialogContext } from './dialog-context';
import DialogOverlay from './dialog-overlay';

export interface DialogContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Content>, 'asChild'> {
  container?: React.ComponentProps<typeof Portal>['container'];
  overlayClassName?: string;
}

const DialogContent = React.forwardRef<React.ElementRef<typeof Content>, DialogContentProps>(
  (props, ref) => {
    const { slots, classNames } = useDialogContext();
    const { className, overlayClassName, children, container, forceMount, ...contentProps } = props;

    const content = (
      <Content
        ref={ref}
        className={slots.base({ class: clsx(classNames?.base, className) })}
        {...contentProps}
      >
        {children}
      </Content>
    );

    return (
      <Portal container={container} forceMount={forceMount}>
        <div className={slots.wrapper({ class: classNames?.wrapper })}>
          <DialogOverlay className={overlayClassName}>{content}</DialogOverlay>
        </div>
      </Portal>
    );
  },
);

DialogContent.displayName = Content.displayName;

export default DialogContent;
