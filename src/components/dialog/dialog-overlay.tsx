import { Overlay } from '@radix-ui/react-dialog';
import React from 'react';
import { clsx } from '../../utils/shared-utils';
import { useDialogContext } from './dialog-context';

export interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof Overlay> {}

const DialogOverlay = React.forwardRef<React.ElementRef<typeof Overlay>, DialogOverlayProps>(
  ({ className, ...props }, ref) => {
    const { slots, classNames } = useDialogContext();

    return (
      <Overlay
        ref={ref}
        className={slots.backdrop({ class: clsx(classNames?.backdrop, className) })}
        {...props}
      />
    );
  },
);

DialogOverlay.displayName = Overlay.displayName;

export default DialogOverlay;
