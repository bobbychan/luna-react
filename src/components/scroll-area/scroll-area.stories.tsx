import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '.';
import { Divider } from '../divider';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-full h-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: Story = {
  render: (args) => (
    <ScrollArea
      className="h-72 w-48 rounded-md border"
      type="always"
      classNames={{ scrollbar: '' }}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Divider className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
