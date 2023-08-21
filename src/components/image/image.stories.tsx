import type { Meta, StoryObj } from '@storybook/react';

import NextImage from 'next/image';
import React from 'react';
import { Image, ImageProps } from '.';
import { image } from '../../theme';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    shadow: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg'],
    },
    isBlurred: {
      control: {
        type: 'boolean',
      },
    },
    isZoomed: {
      control: {
        type: 'boolean',
      },
    },
    showSkeleton: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

const defaultProps: ImageProps = {
  ...image.defaultVariants,
  src: '/images/local-image-1.jpeg',
  alt: 'hero image',
  disableSkeleton: true,
};

const LoadingTemplate = (args: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const time = !args.disableSkeleton ? 2500 : 500;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [args.disableSkeleton]);

  return <Image {...args} alt="" isLoading={isLoading} />;
};

export const Default: Story = {
  args: {
    ...defaultProps,
    width: 300,
  },
};

export const Blurred = {
  args: {
    ...defaultProps,
    width: 300,
    isBlurred: true,
    src: '/images/local-image-small.jpg',
  },
};

export const Zoomed = {
  args: {
    ...defaultProps,
    width: 300,
    isZoomed: true,
    radius: 'lg',
    src: 'https://images.unsplash.com/photo-1691246806224-a6e9dde3678d',
  },
};

export const Shadow = {
  args: {
    ...defaultProps,
    width: 300,
    isZoomed: true,
    radius: 'lg',
    shadow: 'md',
    src: '/images/local-image-small.jpg',
  },
};

export const AnimatedLoad = {
  args: {
    ...defaultProps,
    disableSkeleton: false,
    width: 300,
    height: 200,
    radius: 'lg',
    src: 'https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
  },
};

export const Fallback = {
  render: LoadingTemplate,

  args: {
    ...defaultProps,
    width: 300,
    height: 200,
    radius: 'lg',
    src: 'https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    fallbackSrc: 'https://via.placeholder.com/300x200',
  },
};

export const Skeleton = {
  render: LoadingTemplate,

  args: {
    ...defaultProps,
    width: 300,
    height: 450,
    radius: 'lg',
    src: 'https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    disableSkeleton: false,
  },
};

export const WithNextImage = {
  args: {
    ...defaultProps,
    disableSkeleton: false,
    width: 300,
    height: 200,
    radius: 'lg',
    as: NextImage,
    src: 'https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
  },
};
