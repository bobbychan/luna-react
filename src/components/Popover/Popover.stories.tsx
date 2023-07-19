import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useRef, useState } from 'react';
import Popover, { PopoverProps } from '.';
import Button from '../Button';

const meta: Meta<typeof Popover> = {
  title: 'Data Display/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

const DefaultComponent = (args: PopoverProps) => {
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
      <Popover {...args} trigger="click" placement="bottom">
        <Popover.Trigger>
          <Button color="primary">Show me</Button>
        </Popover.Trigger>
        <Popover.Content className="custome">
          <Popover.Header>Popover header</Popover.Header>
          <Popover.Body>
            <p>Popover body</p>
            <p>Popover body</p>
            <p>Popover body</p>
          </Popover.Body>
          <Popover.CloseButton></Popover.CloseButton>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
