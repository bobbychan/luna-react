import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useRef, useState } from 'react';
import Modal, { ModalProps } from '.';
import Button from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Actions/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

const DefaultComponent = (args: ModalProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleShow = useCallback(() => {
    setOpen(true);
  }, []);

  const handleHide = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal
        {...args}
        ref={ref}
        open={open}
        size="2xl"
        initialFocus={inputRef}
        onClose={handleHide}
      >
        <Modal.Header as="h3">Modal Title</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Close</Button>
          <Button color="primary" onClick={handleHide}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
