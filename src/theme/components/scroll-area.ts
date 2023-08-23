import type { VariantProps } from 'tailwind-variants';
import { tv } from '../utils/tv';

/**
 * ScrollArea wrapper **Tailwind Variants** component
 *
 * const {base, viewport, scrollbar, thumb } = scrollArea({...})
 */
const scrollArea = tv({
  slots: {
    base: 'relative overflow-hidden w-full h-full flex flex-col',
    viewport: 'w-full h-full rounded-[inherit]',
    scrollbar: 'flex touch-none select-none transition-colors m-1 bg-default-100',
    thumb: 'relative flex-1 rounded-full bg-default',
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: 'w-1 my-2',
      },
      horizontal: {
        scrollbar: 'h-1 mx-2',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export type ScrollAreaVariantProps = VariantProps<typeof scrollArea>;
export type ScrollAreaSlots = keyof ReturnType<typeof scrollArea>;

export { scrollArea };
