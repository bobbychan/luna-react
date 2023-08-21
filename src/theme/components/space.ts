import type { VariantProps } from 'tailwind-variants';

import { tv } from '../utils/tv';

/**
 * Space wrapper **Tailwind Variants** component
 *
 * @example
 *
 * const styles = space()
 *
 * <span className={styles} />
 */
const space = tv({
  base: 'inline-flex',
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    wrap: {
      true: 'flex-wrap',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    align: 'center',
    wrap: false,
  },
});

export type SpaceVariantProps = VariantProps<typeof space>;

export { space };
