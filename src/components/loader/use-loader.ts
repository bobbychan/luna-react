import type { LoaderSlots, LoaderVariantProps } from '../../theme';
import type { HTMLProps, PropGetter } from '../../utils/system';

import { Ref, useCallback, useMemo } from 'react';
import { SlotsToClasses, loader } from '../../theme';
import { clsx } from '../../utils/shared-utils';
import { mapPropsVariants } from '../../utils/system';

interface Props extends HTMLProps<'div'> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement | null>;
  /**
   * Loader label, in case you passed it will be used as `aria-label`.
   */
  label?: string;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Loader classNames={{
   *    base:"base-classes",
   *    wrapper: "wrapper-classes",
   *    circle1: "circle1-classes",
   *    circle2: "circle2-classes",
   *    label: "label-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<LoaderSlots>;
}

export type UseLoaderProps = Props & LoaderVariantProps;

export function useLoader(originalProps: UseLoaderProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, loader.variantKeys);

  const { children, className, classNames, label: labelProp, ...otherProps } = props;

  const slots = useMemo(() => loader({ ...variantProps }), [variantProps]);

  const baseStyles = clsx(classNames?.base, className);

  const label = labelProp || children;

  const ariaLabel = useMemo(() => {
    if (label && typeof label === 'string') {
      return label;
    }

    return !otherProps['aria-label'] ? 'Loading' : '';
  }, [label, otherProps]);

  const getLoaderProps = useCallback<PropGetter>(
    () => ({
      'aria-label': ariaLabel,
      className: slots.base({
        class: baseStyles,
      }),
      ...otherProps,
    }),
    [ariaLabel, slots, baseStyles, otherProps],
  );

  return { label, slots, classNames, getLoaderProps };
}

export type UseLoaderReturn = ReturnType<typeof useLoader>;
