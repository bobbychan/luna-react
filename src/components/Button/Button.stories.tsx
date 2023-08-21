import { PaperAirplaneIcon, PlayIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup, ButtonProps } from '.';
import { button } from '../../theme/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    spinnerPlacement: {
      control: {
        type: 'select',
      },
      options: ['start', 'end'],
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    disableAnimation: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultProps: ButtonProps = {
  children: 'Button',
  loaderPlacement: 'start',
  ...button.defaultVariants,
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} onClick={() => console.log('clicked')}>
        Default
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} variant="solid">
        Solid
      </Button>
      <Button {...args} variant="faded">
        Faded
      </Button>
      <Button {...args} variant="bordered">
        Bordered
      </Button>
      <Button {...args} variant="light">
        Light
      </Button>
      <Button {...args} variant="flat">
        Flat
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="shadow">
        Shadow
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Radius: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button radius="full">Full</Button>
      <Button radius="lg">Large</Button>
      <Button radius="md">Medium</Button>
      <Button radius="sm">Small</Button>
      <Button radius="none">None</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="danger">
        Error
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    color: 'primary',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div className="flex gap-4 items-center">
        <Button {...args} size="lg">
          loading
        </Button>
        <Button {...args} size="md">
          loading
        </Button>
        <Button {...args} size="sm">
          loading
        </Button>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <Button {...args} color="primary">
          loading
        </Button>
        <Button {...args} color="secondary">
          loading
        </Button>
        <Button {...args} color="success">
          loading
        </Button>
        <Button {...args} color="warning">
          loading
        </Button>
        <Button {...args} color="danger">
          loading
        </Button>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <Button {...args} variant="solid">
          loading
        </Button>
        <Button {...args} variant="faded">
          loading
        </Button>
        <Button {...args} variant="bordered">
          loading
        </Button>
        <Button {...args} variant="light">
          loading
        </Button>
        <Button {...args} variant="flat">
          loading
        </Button>
        <Button {...args} variant="ghost">
          loading
        </Button>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <Button
          {...args}
          loaderPlacement="end"
          onClick={async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
          }}
        >
          Promise loading
        </Button>
      </div>
    </>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button color="primary" startContent={<HeartIcon className="h-5 w-5" />}>
        Like
      </Button>
      <Button
        color="danger"
        variant="bordered"
        startContent={<PaperAirplaneIcon className="h-5 w-5" />}
      >
        Send
      </Button>
      <Button size="sm" startContent={<PlusCircleIcon className="h-4 w-4" />}>
        Add
      </Button>
      <Button endContent={<HeartIcon className="h-5 w-5" />}>Like</Button>
      <Button isIconOnly color="danger" aria-label="Like">
        <HeartIcon className="h-5 w-5" />
      </Button>
      <Button isIconOnly color="secondary" variant="faded" aria-label="Play music">
        <PlayIcon className="h-5 w-5" />
      </Button>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Button
      </Button>
    </div>
  ),
};

export const Group: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup isDisabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  ),
};
