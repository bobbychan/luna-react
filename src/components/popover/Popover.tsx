import {
  Placement,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import React, { useState } from 'react';
import { useFloating } from '../../utils/use-floating';
import { PopoverBody } from './PopoverBody';
import { PopoverCloseButton } from './PopoverCloseButton';
import { PopoverContent } from './PopoverContent';
import { PopoverContext } from './PopoverContext';
import { PopoverHeader } from './PopoverHeader';
import { PopoverTrigger } from './PopoverTrigger';

export interface PopoverOptions {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: 'click' | 'hover';
}

export interface PopoverProps extends PopoverOptions {
  children?: React.ReactNode;
  className?: string;
}

export function usePopover({
  initialOpen = false,
  placement = 'bottom',
  trigger = 'click',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: PopoverOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null && trigger === 'click',
  });
  const hover = useHover(context, {
    enabled: controlledOpen == null && trigger === 'hover',
    handleClose: safePolygon(),
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, hover, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId],
  );
}

export function Popover({
  children,
  modal = false,
  ...restOptions
}: PopoverProps) {
  const popover = usePopover({ modal, ...restOptions });
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
}

export default Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  CloseButton: PopoverCloseButton,
});
