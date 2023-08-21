import type { VariantProps } from 'tailwind-variants';
import { tv } from '../utils/tv';

/**
 * Loader wrapper **Tailwind Variants** component
 *
 * const {base, circle, label } = loader({...})
 *
 * @example
 * <div className={base())}>
 *    <span className={circle()}/>
 *    <span className={label()}/>
 * </div>
 */
const loader = tv({
  slots: {
    base: 'inline-flex flex-col gap-2 items-center justify-center pointer-events-none',
    circle: 'luna-loading bg-current',
    label: 'text-foreground',
  },
  variants: {
    variant: {
      spinner: {
        circle: 'luna-loading-spinner',
      },
      dots: {
        circle: 'luna-loading-dots',
      },
      ring: {
        circle: 'luna-loading-ring',
      },
      ball: {
        circle: 'luna-loading-ball',
      },
      bars: {
        circle: 'luna-loading-bars',
      },
      infinity: {
        circle: 'luna-loading-infinity',
      },
    },
    size: {
      sm: {
        circle: 'w-5 h-5',
        label: 'text-sm',
      },
      md: {
        circle: 'w-8 h-8',
        label: 'text-base',
      },
      lg: {
        circle: 'w-10 h-10',
        label: 'text-lg',
      },
    },
    color: {
      current: {
        circle: 'text-current',
      },
      default: {
        circle: 'text-default',
      },
      primary: {
        circle: 'text-primary',
      },
      secondary: {
        circle: 'text-secondary',
      },
      success: {
        circle: 'text-success',
      },
      warning: {
        circle: 'text-warning',
      },
      danger: {
        circle: 'text-danger',
      },
    },
  },
  defaultVariants: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
  },
});

export type LoaderVariantProps = VariantProps<typeof loader>;
export type LoaderSlots = keyof ReturnType<typeof loader>;

export { loader };
