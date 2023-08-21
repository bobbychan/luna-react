import { CheckCircleIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar, Chip } from '../../';
import { chip } from '../../theme';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'dot'],
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
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

const defaultProps = {
  ...chip.defaultVariants,
  children: 'Chip',
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip radius="full">Full</Chip>
      <Chip radius="lg">Large</Chip>
      <Chip radius="md">Medium</Chip>
      <Chip radius="sm">Small</Chip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip color="warning" variant="solid">
        Solid
      </Chip>
      <Chip color="warning" variant="bordered">
        Bordered
      </Chip>
      <Chip color="warning" variant="light">
        Light
      </Chip>
      <Chip color="warning" variant="flat">
        Flat
      </Chip>
      <Chip color="warning" variant="faded">
        Faded
      </Chip>
      <Chip color="warning" variant="shadow">
        Shadow
      </Chip>
      <Chip color="warning" variant="dot">
        Dot
      </Chip>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Chip startContent={<CheckCircleIcon className="w-4 h-4" />} variant="faded" color="success">
        Chip
      </Chip>
      <Chip endContent={<MoonIcon className="w-4 h-4" />} variant="flat" color="secondary">
        Chip
      </Chip>
    </div>
  ),
};

export const Closeable: Story = {
  render: () => (
    <div className="flex gap-4">
      <Chip onClose={() => console.log('close')}>Chip</Chip>
      <Chip
        onClose={() => console.log('close')}
        variant="bordered"
        endContent={<CheckCircleIcon width="1em" height="1em" />}
      >
        Chip
      </Chip>
    </div>
  ),
};

export const WithAvatar = {
  args: {
    ...defaultProps,
    variant: 'flat',
    color: 'secondary',
    avatar: <Avatar name="JW" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />,
  },
};

export const CustomStyles: Story = {
  args: {
    ...defaultProps,
    variant: 'shadow',
    classNames: {
      base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
      content: 'drop-shadow shadow-black text-white',
    },
    children: 'New',
  },
};
