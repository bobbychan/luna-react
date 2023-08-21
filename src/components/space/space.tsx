import React from 'react';
import { forwardRef } from '../../utils/utils';
import { UseSpaceProps, useSpace } from './use-space';

export interface SpaceProps extends UseSpaceProps {}

const Space = forwardRef<'div', SpaceProps>((props, ref) => {
  const { Component, children, getSpaceProps } = useSpace({ ...props });

  return (
    <Component ref={ref} {...getSpaceProps()}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) && <div>{child}</div>;
      })}
    </Component>
  );
});

Space.displayName = 'Space';

export default Space;
