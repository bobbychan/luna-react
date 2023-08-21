import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useRef, useState } from 'react';
import Dropdown, { DropdownProps } from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'Actions/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const DefaultComponent = (args: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleShow = useCallback(() => {
    setOpen(true);
  }, []);

  const handleHide = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Dropdown {...args}>
        <Dropdown.Item label="Test1" />
        <Dropdown.Item label="Test2" />
        <Dropdown.Item label="Test3" />
        <Dropdown.Item label="Test4" />
      </Dropdown>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
