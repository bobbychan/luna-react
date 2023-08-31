import type { Meta } from '@storybook/react';
import React from 'react';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.';
import { Button } from '../button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-full h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog size="3xl" open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button color="primary">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent
      // onEscapeKeyDown={(e) => e.preventDefault()}
      // onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
            consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
            nostrud ad veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
            Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
            Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          </p>
          <p>
            Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
            Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
            Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
            Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
            consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
            nostrud ad veniam.
          </p>
          <p>
            Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
            Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
            Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
            Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button color="primary" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Default = {
  render: Template,
};
