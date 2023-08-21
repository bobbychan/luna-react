import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useInteractions,
  useMergeRefs,
  useRole,
  useTransitionStatus,
} from '@floating-ui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import type { MutableRefObject } from 'react';
import React, { useState } from 'react';
import { IComponentBaseProps } from '../../utils/types';
import { useFloating } from '../../utils/use-floating';
import { Button } from '../button';
import ModalBody from './ModalBody';
import { ModalContext } from './ModalContext';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

type ModalSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'full';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, IComponentBaseProps {
  /**
   *  specifies the root node the portal container will be appended to.
   */
  root?: HTMLElement | MutableRefObject<HTMLElement | null>;
  /**
   * selects the node with the id if it exists, or create it and append it to the specified root (by default document.body).
   */
  id?: string;
  open?: boolean;
  size?: ModalSize;
  overlayStyle?: React.CSSProperties;
  closeIcon?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
  onClose?: () => void;
}

const classPrefix = 'luna-modal';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, propsRef) => {
  const {
    root,
    id,
    children,
    className,
    style,
    open,
    size,
    closeIcon = true,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    initialFocus,
    dataTheme,
    overlayStyle,
    onClose,
    ...rest
  } = props;
  const [headerId, setHeaderId] = useState<string | undefined>(undefined);

  const { context } = useFloating({
    open,
    onOpenChange: () => onClose && onClose(),
  });
  const ref = useMergeRefs([context.refs.setFloating, propsRef]);

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    enabled: closeOnOverlayClick,
    escapeKey: closeOnEsc,
    outsidePressEvent: 'mousedown',
  });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  const { isMounted, status } = useTransitionStatus(context, {
    duration: 250,
  });

  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-${size}`]: size,
  });

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ setHeaderId, onClose }}>
      <FloatingPortal root={root} id={id}>
        <FloatingOverlay
          lockScroll
          className={`${classPrefix}-overlay`}
          style={overlayStyle}
          data-status={status}
        >
          <FloatingFocusManager context={context} initialFocus={initialFocus}>
            <div
              {...getFloatingProps(rest)}
              ref={ref}
              className={classes}
              style={style}
              aria-labelledby={headerId}
            >
              {closeIcon && (
                <Button
                  color="ghost"
                  size="sm"
                  shape="circle"
                  endIcon={<XMarkIcon />}
                  className={`${classPrefix}-close-btn`}
                  onClick={onClose}
                />
              )}
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    </ModalContext.Provider>
  );
});

Modal.displayName = 'Modal';

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
