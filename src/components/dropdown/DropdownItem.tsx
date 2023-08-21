import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';

export interface SelectPickerItemProps {}

export const DropdownItem = ({ label }: { label: string }) => {
  const { activeIndex, selectedIndex, getItemProps, handleSelect } =
    useDropdownContext();

  const { ref, index } = useListItem({ label });
  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <button
      ref={ref}
      role="option"
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      style={{
        background: isActive ? 'cyan' : '',
        fontWeight: isSelected ? 'bold' : '',
      }}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {label}
    </button>
  );
};
