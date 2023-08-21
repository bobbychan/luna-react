import type { Meta, StoryObj } from '@storybook/react';

import { CameraIcon } from '@heroicons/react/24/solid';
import { Avatar, AvatarProps } from '.';
import { avatar } from '../../theme';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
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
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const defaultProps: AvatarProps = {
  ...avatar.defaultVariants,
  src: 'https://i.pravatar.cc/150',
};

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar name="Junior" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar name="Jane" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar name="Bobby" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} className="w-6 h-6 text-xs" />
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} className="w-20 h-20 text-lg" />
    </div>
  ),
  args: {
    ...defaultProps,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar name="Bobby" isDisabled />
    </div>
  ),
  args: {
    ...defaultProps,
    isDisabled: true,
  },
};

export const Bordered: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar name="Bobby" size="lg" isBordered />
    </div>
  ),
  args: {
    ...defaultProps,
    size: 'lg',
    isBordered: true,
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} color="default" />
      <Avatar {...args} color="primary" />
      <Avatar {...args} color="secondary" />
      <Avatar {...args} color="success" />
      <Avatar {...args} color="warning" />
      <Avatar name="Bobby" size="lg" color="danger" isBordered />
    </div>
  ),
  args: {
    ...defaultProps,
    size: 'lg',
    isBordered: true,
  },
};

export const Radius: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} radius="full" />
      <Avatar {...args} radius="lg" />
      <Avatar {...args} radius="md" />
      <Avatar {...args} radius="sm" />
    </div>
  ),
  args: {
    ...defaultProps,
    size: 'lg',
    isBordered: true,
  },
};

export const Fallbacks: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar showFallback src="https://images.unsplash.com/broken" />
      <Avatar showFallback name="Bobby" src="https://images.unsplash.com/broken" />
      <Avatar
        showFallback
        src="https://images.unsplash.com/broken"
        fallback={<CameraIcon className="animate-pulse w-6 h-6 text-default-500" />}
      />
      <Avatar name="Bobby" src="https://images.unsplash.com/broken" />
    </div>
  ),
};
