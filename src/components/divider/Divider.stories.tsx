import type { Meta, StoryObj } from '@storybook/react';
import Divider from '.';
import { Button } from '../button';

const Placeholder = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
);

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Horizontal: Story = {
  render: (args) => (
    <>
      <Placeholder />
      <Divider />
      <Placeholder />
      <Divider />
      <Placeholder />
    </>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <>
      Text
      <Divider type="vertical">OR</Divider>
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <>
      <Button block color="primary">
        Sign in
      </Button>
      <Divider>OR</Divider>
      <Button block color="secondary">
        Sign up
      </Button>
    </>
  ),
};

export const Dashed: Story = {
  args: {
    dashed: true,
    style: {
      '--divider-border-color': '#FFC107',
      '--divider-border-width': '3px',
      '--divider-gap': '24px',
    },
    children: 'OR',
  },
};
