import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Spinner: Story = {
  args: {
    variant: 'spinner',
    color: 'primary',
    label: 'Loading',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
  },
};

export const Ring: Story = {
  args: {
    variant: 'ring',
  },
};

export const Ball: Story = {
  args: {
    variant: 'ball',
  },
};

export const Bars: Story = {
  args: {
    variant: 'bars',
  },
};

export const Infinity: Story = {
  args: {
    variant: 'infinity',
  },
};

export const WithSizes: Story = {
  args: {
    variant: 'dots',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Loader {...args} size="sm" />
      <Loader {...args} size="md" />
      <Loader {...args} size="lg" />
    </div>
  ),
};

export const WithColors: Story = {
  args: {
    variant: 'spinner',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Loader {...args} color="primary" />
      <Loader {...args} color="secondary" />
      <Loader {...args} color="success" />
      <Loader {...args} color="warning" />
      <Loader {...args} color="danger" />
    </div>
  ),
};
