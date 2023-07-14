import type { Meta, StoryObj } from '@storybook/react';
import Space from '.';
import Button from '../Button';

const meta: Meta<typeof Space> = {
  title: 'Layout/Space',
  component: Space,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Space>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => (
    <Space {...args} warp size={['lg', 'sm']}>
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="ghost">Ghost</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
    </Space>
  ),
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <Space {...args} warp size={20}>
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="ghost">Ghost</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
    </Space>
  ),
};

export const WithSplit: Story = {
  args: {
    direction: 'horizontal',
    split: '|',
  },
  render: (args) => (
    <Space {...args} warp size={20}>
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="ghost">Ghost</Button>
    </Space>
  ),
};
