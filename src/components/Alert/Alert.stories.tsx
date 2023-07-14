import { BellIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import Alert from '.';

const meta: Meta<typeof Alert> = {
  title: 'Data Display/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
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

export const WithIcons: Story = {
  args: {
    icon: <BellIcon />,
    status: 'success',
    children: 'An example alert with an icon — check it out!',
  },
};

export const InfoColor: Story = {
  args: {
    status: 'info',
    children: <span>New software update available.</span>,
  },
};

export const SuccessColor: Story = {
  args: {
    status: 'success',
    children: <span>Successfully updated!</span>,
  },
};

export const WarningColor: Story = {
  args: {
    status: 'warning',
    children: <span>Warning: Invalid email address!</span>,
  },
};

export const ErrorColor: Story = {
  args: {
    status: 'error',
    children: <span>Error: Invalid email address!</span>,
  },
};
