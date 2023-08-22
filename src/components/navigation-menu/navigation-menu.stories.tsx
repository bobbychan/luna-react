import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';
import type { NavigationMenuProps } from '.';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '.';
import { Button } from '../button';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="h-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuLink asChild>
        <a className={clsx('ListItemLink', className)} {...props} ref={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);
ListItem.displayName = 'ListItem';

const menuData = [
  {
    title: 'React',
    summary: 'A JavaScript library for building user interfaces',
    url: 'https://reactjs.org',
  },
  {
    title: 'Vue',
    summary: 'The Progressive JavaScript Framework',
    url: 'https://vuejs.org',
  },
  {
    title: 'Angular',
    summary: 'One framework. Mobile & desktop.',
    url: 'https://angular.io',
  },
];

const DefaultComponent = (args: NavigationMenuProps) => {
  return (
    <div>
      <NavigationMenu {...args} value="learn">
        <NavigationMenuList>
          <NavigationMenuItem value="learn">
            <NavigationMenuTrigger asChild>
              <Button variant="solid" color="primary">
                Learn
              </Button>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                {menuData.map((data) => (
                  <ListItem key={data.title} title={data.title} href={data.url}>
                    {data.summary}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
