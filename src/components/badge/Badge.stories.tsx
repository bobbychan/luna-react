import { HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';
import {
  brandColors,
  componentColors,
  componentSizes,
  componentStatuses,
} from '../../utils/constants';
import { Button } from '../button';

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
        {brandColors.map((color) => (
          <Badge key={color} {...args} color={color}>
            {color}
          </Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {brandColors.map((color) => (
          <Badge key={color} {...args} color={color} pill>
            {color}
          </Badge>
        ))}
      </div>
    </>
  ),
};

export const WithState: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
        {componentStatuses.map((color) => (
          <Badge key={color} {...args} color={color}>
            {color}
          </Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {componentStatuses.map((color) => (
          <Badge key={color} {...args} color={color} pill>
            {color}
          </Badge>
        ))}
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
        {componentColors.map((color) => (
          <Badge key={color} {...args} color={color}>
            {color}
          </Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {componentColors.map((color) => (
          <Badge key={color} {...args} color={color} pill>
            {color}
          </Badge>
        ))}
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
      {componentSizes.map((size) => (
        <Badge key={size} {...args} size={size}>
          {size}
        </Badge>
      ))}
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
