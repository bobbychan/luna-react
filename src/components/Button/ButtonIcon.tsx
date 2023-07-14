import { cloneElement, isValidElement } from 'react';

type ButtonIconProps = React.PropsWithChildren<{
  startIcon?: React.ReactNode;
}>;

export function ButtonIcon(props: ButtonIconProps) {
  const { children } = props;
  const _children = isValidElement(children)
    ? cloneElement<any>(children, {
        'aria-hidden': true,
        focusable: false,
      })
    : children;

  return <span className="luna-btn-icon">{_children}</span>;
}

ButtonIcon.dispayName = 'ButtonIcon';
