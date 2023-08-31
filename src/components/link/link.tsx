import { forwardRef } from '../../utils/system';
import { LinkIcon } from './link-icon';

import { UseLinkProps, useLink } from './use-link';

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<'a', LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = 'Link';

export default Link;
