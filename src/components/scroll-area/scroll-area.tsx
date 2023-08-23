import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import React, { useMemo } from 'react';
import { ScrollAreaSlots, ScrollAreaVariantProps, SlotsToClasses, scrollArea } from '../../theme';

type ScrollAreaElement = React.ElementRef<typeof ScrollAreaPrimitive.Viewport>;

export interface ScrollAreaProps
  extends React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>,
    Omit<React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Viewport>, 'dir'>,
    ScrollAreaVariantProps {
  classNames?: SlotsToClasses<ScrollAreaSlots>;
  scrollbars?: 'horizontal' | 'vertical' | 'both';
}

const ScrollArea = React.forwardRef<ScrollAreaElement, ScrollAreaProps>((props, ref) => {
  const { children, className, classNames, scrollbars = 'vertical', ...rest } = props;

  const slots = useMemo(() => scrollArea(), []);
  const { scrollbar: horizontalScrollbar } = scrollArea({ orientation: 'horizontal' });
  const { scrollbar: verticalScrollbar } = scrollArea({ orientation: 'vertical' });

  return (
    <ScrollAreaPrimitive.Root
      className={slots.base({ class: className || classNames?.base })}
      {...rest}
    >
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        className={slots.viewport({ class: classNames?.viewport })}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      {scrollbars !== 'vertical' ? (
        <ScrollAreaPrimitive.Scrollbar
          orientation="horizontal"
          className={horizontalScrollbar({ class: classNames?.scrollbar })}
        >
          <ScrollAreaPrimitive.Thumb className={slots.thumb({ class: classNames?.thumb })} />
        </ScrollAreaPrimitive.Scrollbar>
      ) : null}

      {scrollbars !== 'horizontal' ? (
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className={verticalScrollbar({ class: classNames?.scrollbar })}
        >
          <ScrollAreaPrimitive.Thumb className={slots.thumb({ class: classNames?.thumb })} />
        </ScrollAreaPrimitive.Scrollbar>
      ) : null}

      {scrollbars === 'both' ? <ScrollAreaPrimitive.Corner /> : null}
    </ScrollAreaPrimitive.Root>
  );
});

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export default ScrollArea;
