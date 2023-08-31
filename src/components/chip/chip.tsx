import { XCircleIcon } from '@heroicons/react/24/solid';
import { useMemo } from 'react';
import { forwardRef } from '../../utils/system';

import { UseChipProps, useChip } from './use-chip';

export interface ChipProps extends Omit<UseChipProps, 'isOneChar'> {}

const Chip = forwardRef<'div', ChipProps>((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isDot,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps,
  } = useChip({
    ...props,
    ref,
  });

  const start = useMemo(() => {
    if (isDot && !startContent) {
      return <span className={slots.dot({ class: classNames?.dot })} />;
    }

    return startContent;
  }, [slots, startContent, isDot]);

  const end = useMemo(() => {
    if (isCloseable) {
      return (
        <span {...getCloseButtonProps()}>
          {endContent || <XCircleIcon width="1em" height="1em" />}
        </span>
      );
    }

    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);

  return (
    <Component {...getChipProps()}>
      {start}
      <span className={slots.content({ class: classNames?.content })}>{children}</span>
      {end}
    </Component>
  );
});

Chip.displayName = 'Chip';

export default Chip;
