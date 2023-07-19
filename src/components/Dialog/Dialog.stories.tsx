import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useRef } from 'react';
import Dialog, { DialogProps } from '.';
import Button from '../Button';

const meta: Meta<typeof Dialog> = {
  title: 'Actions/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DefaultComponent = (args: DialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Dialog {...args} ref={ref} closeOnOverlayClick>
        <Dialog.Header>Dialog Title</Dialog.Header>
        <Dialog.Body>
          Press ESC key or click the button below to close
        </Dialog.Body>
        <Dialog.Footer>
          <Button>Close</Button>
          <Button
            color="primary"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
