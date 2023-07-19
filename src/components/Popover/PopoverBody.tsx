import classNames from 'classnames';
import React, { useId } from 'react';
import { usePopoverContext } from './Popover';

export const PopoverBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function PopoverDescription(props, ref) {
  const { setDescriptionId } = usePopoverContext();
  const id = useId();

  const classes = classNames('luna-popover-body', props.className);

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return <div {...props} className={classes} ref={ref} id={id} />;
});
