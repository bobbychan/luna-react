import {
  HeartIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlayIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'ghost',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
    animation: {
      table: {
        defaultValue: { summary: true },
      },
    },
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const WithBrand: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args}>Default</Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const WithState: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </div>
  ),
};

export const WithOutline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} variant="outline">
        Default
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </div>
  ),
};

export const WithSize: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="md">
        Normal
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="xs">
        Tiny
      </Button>
    </div>
  ),
};

export const Block: Story = {
  args: {
    block: true,
    children: 'Block level button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args}>Default</Button>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} size="lg" startIcon={<HeartIcon />}>
        Like
      </Button>
      <Button {...args} size="md" startIcon={<PaperAirplaneIcon />}>
        Send
      </Button>
      <Button {...args} size="sm" startIcon={<PlusCircleIcon />}>
        Add
      </Button>
      <Button {...args} size="xs" startIcon={<HeartIcon />}>
        love
      </Button>
      <Button {...args} endIcon={<HeartIcon />}>
        loading
      </Button>
      <Button
        {...args}
        shape="circle"
        color="primary"
        endIcon={<MagnifyingGlassIcon />}
      />
      <Button {...args} shape="square" color="success" endIcon={<PlayIcon />} />
    </div>
  ),
};

export const WithLoading: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Button {...args} size="lg">
          loading
        </Button>
        <Button {...args} size="md">
          loading
        </Button>
        <Button {...args} size="sm">
          loading
        </Button>
        <Button {...args} size="xs">
          loading
        </Button>
        <Button {...args} shape="square" />
        <Button {...args} shape="circle" />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Button {...args} color="neutral">
          loading
        </Button>
        <Button {...args} color="primary">
          loading
        </Button>
        <Button {...args} color="secondary">
          loading
        </Button>
        <Button {...args} color="accent">
          loading
        </Button>
        <Button {...args} color="ghost">
          loading
        </Button>
        <Button {...args} color="info">
          loading
        </Button>
        <Button {...args} color="success">
          loading
        </Button>
        <Button {...args} color="warning">
          loading
        </Button>
        <Button {...args} color="error">
          loading
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Button {...args} color="neutral" disabled>
          loading
        </Button>
        <Button {...args} color="primary" shape="circle" disabled />
      </div>
    </>
  ),
};

export const WithHTMLTags: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button loading as="input" type="checkbox" aria-label="Checkbox" />
      <Button loading as="input" type="radio" aria-label="Radio" />
      <Button loading as="input" type="button" value="Button" />
      <Button loading as="input" type="submit" />
      <Button loading as="input" type="reset" />
      <Button as="a" href="https://www.google.com" target="_blank">
        Link
      </Button>
    </div>
  ),
};
