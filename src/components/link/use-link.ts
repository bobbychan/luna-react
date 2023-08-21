import type { LinkVariantProps } from '../../theme';

import { useCallback, useMemo } from 'react';
import { link } from '../../theme';
import type { HTMLProps, PropGetter } from '../../utils';
import { ReactRef, useDOMRef } from '../../utils/react-utils';
import { dataAttr } from '../../utils/shared-utils';
import { mapPropsVariants } from '../../utils/utils';

interface Props extends HTMLProps<'a'>, LinkVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLAnchorElement | null>;
  /**
   * Whether the link is external.
   * @default false
   */
  isExternal?: boolean;
  /**
   * Whether to show the icon when the link is external.
   * @default false
   */
  showAnchorIcon?: boolean;
  /**
   * The icon to display right after the link.
   * @default <LinkIcon />
   */
  anchorIcon?: React.ReactNode;
}

export type UseLinkProps = Props;

export function useLink(originalProps: UseLinkProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, link.variantKeys);

  const {
    ref,
    as,
    children,
    anchorIcon,
    isExternal = false,
    showAnchorIcon = false,
    autoFocus = false,
    className,
    ...otherProps
  } = props;

  const Component = as || 'a';

  const domRef = useDOMRef(ref);

  if (isExternal) {
    otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
    otherProps.target = otherProps.target ?? '_blank';
  }

  const classNames = useMemo(
    () =>
      link({
        ...variantProps,
        className,
      }),
    [className, variantProps],
  );

  const getLinkProps: PropGetter = useCallback(() => {
    return {
      ref: domRef,
      className: classNames,
      'data-disabled': dataAttr(originalProps.isDisabled),
      ...otherProps,
    };
  }, [domRef, classNames, originalProps.isDisabled, otherProps]);

  return { Component, children, anchorIcon, showAnchorIcon, getLinkProps };
}

export type UseLinkReturn = ReturnType<typeof useLink>;
