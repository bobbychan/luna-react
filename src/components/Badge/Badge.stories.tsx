import { HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';
import Button from '../Button';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const WithBrand: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
        <Badge {...args}>Default</Badge>
        <Badge {...args} color="neutral">
          Neutral
        </Badge>
        <Badge {...args} color="primary">
          Primary
        </Badge>
        <Badge {...args} color="secondary">
          Secondary
        </Badge>
        <Badge {...args} color="accent">
          Accent
        </Badge>
        <Badge {...args} color="ghost">
          Ghost
        </Badge>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Badge {...args} pill>
          Default
        </Badge>
        <Badge {...args} color="neutral" pill>
          Neutral
        </Badge>
        <Badge {...args} color="primary" pill>
          Primary
        </Badge>
        <Badge {...args} color="secondary" pill>
          Secondary
        </Badge>
        <Badge {...args} color="accent" pill>
          Accent
        </Badge>
        <Badge {...args} color="ghost" pill>
          Ghost
        </Badge>
      </div>
    </>
  ),
};

export const WithState: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
        <Badge {...args} color="info">
          Info
        </Badge>
        <Badge {...args} color="success">
          Success
        </Badge>
        <Badge {...args} color="warning">
          Warning
        </Badge>
        <Badge {...args} color="error">
          Error
        </Badge>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Badge {...args} color="info" pill>
          Info
        </Badge>
        <Badge {...args} color="success" pill>
          Success
        </Badge>
        <Badge {...args} color="warning" pill>
          Warning
        </Badge>
        <Badge {...args} color="error" pill>
          Error
        </Badge>
      </div>
    </>
  ),
};

export const WithOutline: Story = {
  args: {
    outline: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
        <Badge {...args}>Default</Badge>
        <Badge {...args} color="primary">
          Primary
        </Badge>
        <Badge {...args} color="secondary">
          Secondary
        </Badge>
        <Badge {...args} color="accent">
          Accent
        </Badge>
        <Badge {...args} color="info">
          Info
        </Badge>
        <Badge {...args} color="success">
          Success
        </Badge>
        <Badge {...args} color="warning">
          Warning
        </Badge>
        <Badge {...args} color="error">
          Error
        </Badge>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Badge {...args} pill>
          Default
        </Badge>
        <Badge {...args} color="primary" pill>
          Primary
        </Badge>
        <Badge {...args} color="secondary" pill>
          Secondary
        </Badge>
        <Badge {...args} color="accent" pill>
          Accent
        </Badge>
        <Badge {...args} color="info" pill>
          Info
        </Badge>
        <Badge {...args} color="success" pill>
          Success
        </Badge>
        <Badge {...args} color="warning" pill>
          Warning
        </Badge>
        <Badge {...args} color="error" pill>
          Error
        </Badge>
      </div>
    </>
  ),
};

export const WithSize: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge {...args} size="lg">
        Large
      </Badge>
      <Badge {...args} size="md">
        Normal
      </Badge>
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="xs">
        Tiny
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge {...args} size="lg" color="primary" icon={<HeartIcon />}>
        Like
      </Badge>
      <Badge {...args} size="md" color="primary" icon={<PaperAirplaneIcon />}>
        Send
      </Badge>
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button color="primary">
        INBOX
        <Badge {...args} pill>
          +99
        </Badge>
      </Button>
      <Button color="primary">
        INBOX
        <Badge {...args} color="secondary" pill>
          +99
        </Badge>
      </Button>
    </div>
  ),
};
