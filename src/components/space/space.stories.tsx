import type { Meta, StoryObj } from '@storybook/react';
import { Button, Space } from '../../';

const meta: Meta<typeof Space> = {
  title: 'Components/Space',
  component: Space,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Space>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => (
    <Space {...args} wrap size={['md', 'sm']}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Error</Button>
    </Space>
  ),
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <Space {...args} wrap={false} size={20}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Error</Button>
    </Space>
  ),
};
