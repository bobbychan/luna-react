import React, { cloneElement, isValidElement } from 'react';

type BadgeIconProps = React.PropsWithChildren<{}>;

export function BadgeIcon(props: BadgeIconProps) {
  const { children } = props;
  const _children = isValidElement(children)
    ? cloneElement<any>(children, {
        'aria-hidden': true,
        focusable: false,
      })
    : children;

  return <span className="luna-badge-icon">{_children}</span>;
}

BadgeIcon.dispayName = 'BadgeIcon';

export default BadgeIcon;
