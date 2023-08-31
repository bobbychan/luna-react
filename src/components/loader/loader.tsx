import { forwardRef } from '../../utils/system';
import { UseLoaderProps, useLoader } from './use-loader';

import './loader.css';

export interface LoaderProps extends UseLoaderProps {}

const Loader = forwardRef<'div', LoaderProps>((props, ref) => {
  const { slots, classNames, label, getLoaderProps } = useLoader({ ...props });

  return (
    <div ref={ref} {...getLoaderProps()}>
      <div className={slots.circle({ class: classNames?.circle })} />
      {label && <span className={slots.label({ class: classNames?.label })}>{label}</span>}
    </div>
  );
});

Loader.displayName = 'Loader';

export default Loader;
