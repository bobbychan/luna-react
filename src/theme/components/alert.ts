import type { VariantProps } from 'tailwind-variants';
import { colorVariants } from '../utils';
import { tv } from '../utils/tv';

/**
 * Alert wrapper **Tailwind Variants** component
 *
 * const classNames = alert({...})
 *
 * @example
 * <div
 *  className={classNames())}
 * >
 *   alert content
 * </div>
 */
const alert = tv({
  base: 'grid grid-flow-row sm:grid-flow-col sm:grid-cols-[auto_minmax(auto,1fr)] justify-items-center sm:justify-items-start text-center sm:text-left items-center content-start w-full gap-4 p-4',
  variants: {
    variant: {
      flat: '',
      solid: '',
      bordered: 'border-2 bg-transparent',
    },
    color: {
      default: colorVariants.solid.default,
      primary: colorVariants.solid.primary,
      secondary: colorVariants.solid.secondary,
      success: colorVariants.solid.success,
      warning: colorVariants.solid.warning,
      danger: colorVariants.solid.danger,
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'flat',
    color: 'default',
    radius: 'md',
  },
  compoundVariants: [
    // bordered / color
    {
      variant: 'bordered',
      color: 'default',
      class: colorVariants.bordered.default,
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: colorVariants.bordered.primary,
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: colorVariants.bordered.secondary,
    },
    {
      variant: 'bordered',
      color: 'success',
      class: colorVariants.bordered.success,
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: colorVariants.bordered.warning,
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: colorVariants.bordered.danger,
    },
    // flat / color
    {
      variant: 'flat',
      color: 'default',
      class: colorVariants.flat.default,
    },
    {
      variant: 'flat',
      color: 'primary',
      class: colorVariants.flat.primary,
    },
    {
      variant: 'flat',
      color: 'secondary',
      class: colorVariants.flat.secondary,
    },
    {
      variant: 'flat',
      color: 'success',
      class: colorVariants.flat.success,
    },
    {
      variant: 'flat',
      color: 'warning',
      class: colorVariants.flat.warning,
    },
    {
      variant: 'flat',
      color: 'danger',
      class: colorVariants.flat.danger,
    },
  ],
});

export type AlertVariantProps = VariantProps<typeof alert>;

export { alert };
