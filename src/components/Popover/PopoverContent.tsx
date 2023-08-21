import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { IComponentBaseProps } from '../../utils/types';
import { usePopoverContext } from './PopoverContext';

export interface PopoverContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IComponentBaseProps {
  style?: CSSProperties & Partial<Record<'--popover-radius', string>>;
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(function PopoverContent(
  { style, className, dataTheme, children, ...props },
  propRef,
) {
  const { context: floatingContext, ...context } = usePopoverContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  const classes = classNames('luna-popover', className);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={{ ...context.floatingStyles, ...style }}
          aria-labelledby={context.labelId}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps(props)}
        >
          {children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});
