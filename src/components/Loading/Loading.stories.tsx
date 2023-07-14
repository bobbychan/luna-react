import type { Meta, StoryObj } from '@storybook/react';
import Loading from '.';

const meta: Meta<typeof Loading> = {
  title: 'Data Display/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
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
      <Loading {...args} size="xs" />
      <Loading {...args} size="sm" />
      <Loading {...args} size="md" />
      <Loading {...args} size="lg" />
    </div>
  ),
};

export const WithColors: Story = {
  args: {
    variant: 'spinner',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Loading {...args} color="primary" />
      <Loading {...args} color="secondary" />
      <Loading {...args} color="accent" />
      <Loading {...args} color="neutral" />
      <Loading {...args} color="info" />
      <Loading {...args} color="success" />
      <Loading {...args} color="warning" />
      <Loading {...args} color="error" />
    </div>
  ),
};
