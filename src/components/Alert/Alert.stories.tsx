import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertProps } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['flat', 'solid', 'bordered'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'A simple default alert — check it out!',
  },
};

const Template = (args: AlertProps) => (
  <div className="flex flex-col gap-4 items-center">
    <Alert {...args} icon={<InformationCircleIcon className="shrink-0 w-6 h-6" />}>
      New software update available.
    </Alert>
    <Alert {...args} color="primary" icon={<InformationCircleIcon className="shrink-0 w-6 h-6" />}>
      New software update available.
    </Alert>
    <Alert
      {...args}
      color="secondary"
      icon={<InformationCircleIcon className="shrink-0 w-6 h-6" />}
    >
      New software update available.
    </Alert>
    <Alert {...args} color="success" icon={<CheckCircleIcon className="shrink-0 w-6 h-6" />}>
      Your purchase has been confirmed!
    </Alert>
    <Alert {...args} color="warning" icon={<ExclamationCircleIcon className="shrink-0 w-6 h-6" />}>
      Warning: Invalid email address!
    </Alert>
    <Alert {...args} color="danger" icon={<XCircleIcon className="shrink-0 w-6 h-6" />}>
      Error! Task failed successfully.
    </Alert>
  </div>
);

export const Flat: Story = {
  args: {
    variant: 'flat',
  },
  render: Template,
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
  render: Template,
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
  },
  render: Template,
};
