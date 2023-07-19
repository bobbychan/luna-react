import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';
import Button, { ButtonProps } from '../Button';
import { usePopoverContext } from './PopoverContext';

export const PopoverCloseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function PopoverClose(props, ref) {
  const { setOpen } = usePopoverContext();
  const classes = classNames('luna-popover-close-btn', props.className);

  return (
    <Button
      color="ghost"
      size="xs"
      shape="circle"
      endIcon={<XMarkIcon />}
      className={classes}
      ref={ref}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen(false);
      }}
    />
  );
});
