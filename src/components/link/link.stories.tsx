import type { Meta, StoryObj } from '@storybook/react';

import { LinkIcon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';
import { Button, Link, LinkProps } from '../../';
import { link } from '../../theme';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['foreground', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    underline: {
      control: {
        type: 'select',
      },
      options: ['none', 'hover', 'always', 'active', 'focus'],
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

const defaultProps: LinkProps = {
  ...link.defaultVariants,
  isDisabled: false,
  showAnchorIcon: false,
  children: 'Link',
};

const Template = (args: LinkProps) => <Link {...args} href="#" />;

export const Default: Story = {
  render: Template,

  args: {
    ...defaultProps,
    isDisabled: false,
    color: 'primary',
    size: 'md',
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Link href="#" color="foreground">
        Foreground
      </Link>
      <Link href="#" color="primary">
        Primary
      </Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="success">
        Success
      </Link>
      <Link href="#" color="warning">
        Warning
      </Link>
      <Link href="#" color="danger">
        Danger
      </Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Link href="#" size="sm">
        Small
      </Link>
      <Link href="#" size="md">
        Medium
      </Link>
      <Link href="#" size="lg">
        Large
      </Link>
    </div>
  ),
};

export const Underline: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Link href="#" underline="none">
        None
      </Link>
      <Link href="#" underline="hover">
        Hover
      </Link>
      <Link href="#" underline="always">
        Always
      </Link>
      <Link href="#" underline="active">
        Active
      </Link>
      <Link href="#" underline="focus">
        Focus
      </Link>
    </div>
  ),
};

export const BlockLink: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Link isBlock showAnchorIcon href="#" color="foreground">
        Foreground
      </Link>
      <Link isBlock showAnchorIcon href="#" color="primary">
        Primary
      </Link>
      <Link isBlock showAnchorIcon href="#" color="secondary">
        Secondary
      </Link>
      <Link isBlock showAnchorIcon href="#" color="success">
        Success
      </Link>
      <Link isBlock showAnchorIcon href="#" color="warning">
        Warning
      </Link>
      <Link isBlock showAnchorIcon href="#" color="danger">
        Danger
      </Link>
    </div>
  ),
};

export const CustomAnchor: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Link
        isExternal
        showAnchorIcon
        href="https://www.google.com"
        anchorIcon={<LinkIcon className="w-5 h-5 mx-1" />}
      >
        Custom Icon
      </Link>
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <Button href="https://www.google.com" as={Link} color="primary" showAnchorIcon variant="solid">
      Button Link
    </Button>
  ),
};

export const WithNextLink: Story = {
  render: (args) => (
    <Link href="/route" as={NextLink}>
      Next.js Link
    </Link>
  ),
};
