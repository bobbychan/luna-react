import type { VariantProps } from 'tailwind-variants';

import { tv } from '../utils/tv';

/**
 * Divider wrapper **Tailwind Variants** component
 *
 * @example
 *
 * const styles = divider()
 *
 * <span className={styles} />
 */
const divider = tv({
  base: 'shrink-0 bg-divider border-none',
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type DividerVariantProps = VariantProps<typeof divider>;

export { divider };
