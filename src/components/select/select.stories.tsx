import type { Meta } from '@storybook/react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-full h-screen pl-20">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]" placeholder="Select a fruit" />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
