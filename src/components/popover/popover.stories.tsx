import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '.';
import { Button } from '../button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-full h-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>
        <Button variant="solid" color="danger">
          Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" side="top">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <PopoverClose>
            <Button size="sm">Comment</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
