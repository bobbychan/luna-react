import type { VariantProps } from 'tailwind-variants';
import { tv } from '../utils/tv';

/**
 * ScrollArea wrapper **Tailwind Variants** component
 *
 * const {base, viewport, scrollbar, thumb } = scrollArea({...})
 */
const scrollArea = tv({
  slots: {
    base: 'relative overflow-hidden',
    viewport: 'w-full h-full rounded-[inherit]',
    scrollbar: 'flex touch-none select-none transition-colors',
    thumb: 'relative flex-1 rounded-full bg-content3',
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      },
      horizontal: {
        scrollbar: 'h-2.5 border-t border-t-transparent p-[1px]',
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
