import type {
  Middleware,
  Placement,
  ReferenceType,
  UseFloatingOptions,
} from '@floating-ui/react';
import { useFloating as useBaseFloating } from '@floating-ui/react';

import type { Dispatch, RefObject, SetStateAction } from 'react';

export interface UseFloatingParams<RT extends ReferenceType = ReferenceType>
  extends UseFloatingOptions<RT> {
  placement?: Placement;
  open?: boolean;
  arrowRef?: RefObject<HTMLDivElement>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  whileElementsMounted?: (
    reference: RT,
    floating: HTMLElement,
    update: () => void,
  ) => () => void;
  middleware?: Array<Middleware | null | undefined | false>;
}

export const useFloating = <Type extends ReferenceType = ReferenceType>(
  props: UseFloatingParams,
) => {
  return useBaseFloating<Type>(props);
};
