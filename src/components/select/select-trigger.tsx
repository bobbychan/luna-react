import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Icon, Trigger, Value } from '@radix-ui/react-select';
import React from 'react';
import { cn } from '../../utils/system';
import { useSelectContext } from './select-context';

export interface SelectTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Trigger>, 'asChild'> {
  placeholder?: string;
}

const SelectTrigger = React.forwardRef<React.ElementRef<typeof Trigger>, SelectTriggerProps>(
  (props, ref) => {
    const { className, placeholder, ...triggerProps } = props;
    const { size } = useSelectContext();
    return (
      <Trigger
        asChild
        ref={ref}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      >
        <button>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <Value placeholder={placeholder} />
          </span>
          <Icon asChild>
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </Icon>
        </button>
      </Trigger>
    );
  },
);

SelectTrigger.displayName = 'SelectTrigger';

export default SelectTrigger;
