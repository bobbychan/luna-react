import React, { useId } from 'react';
import { usePopoverContext } from './Popover';

export const PopoverHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(function PopoverHeading(props, ref) {
  const { setLabelId } = usePopoverContext();
  const id = useId();

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  return (
    <header {...props} ref={ref} id={id} className="luna-popover-header">
      {props.children}
    </header>
  );
});
