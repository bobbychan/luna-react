import type { DialogSlots, DialogVariantProps, SlotsToClasses } from '../../theme';

import { Root } from '@radix-ui/react-dialog';
import { useMemo } from 'react';
import { dialog } from '../../theme';
import { mapPropsVariants } from '../../utils/system';
import { DialogProvider } from './dialog-context';

export interface DialoProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    DialogVariantProps {
  classNames?: SlotsToClasses<DialogSlots>;
}

const Dialog: React.FC<DialoProps> = (originalProps) => {
  const [props, variantProps] = mapPropsVariants(originalProps, dialog.variantKeys);
  const { classNames, modal = true, open, ...rest } = props;

  const slots = useMemo(
    () =>
      dialog({
        ...variantProps,
      }),
    [variantProps],
  );

  return (
    <DialogProvider
      value={{
        slots,
        classNames,
        isOpen: open,
        backdrop: originalProps.backdrop,
        scrollBehavior: originalProps.scrollBehavior,
      }}
    >
      <Root modal={modal} open={open} {...rest} />
    </DialogProvider>
  );
};

Dialog.displayName = Root.displayName;

export default Dialog;
