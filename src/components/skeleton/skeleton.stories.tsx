import { Meta } from '@storybook/react';
import { skeleton } from '../../theme';

import { Skeleton } from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    children: {
      hidden: true,
    },
    isLoaded: {
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
} as Meta<typeof Skeleton>;

const defaultProps = {
  ...skeleton.defaultVariants,
  isLoaded: false,
  children: <div className="w-[200px] h-[100px]">Skeleton</div>,
};

export const Default = {
  args: {
    ...defaultProps,
    className: 'rounded-xl',
  },
};

export const Standalone = {
  args: {
    ...defaultProps,
    className: 'rounded-xl',
  },
  render: () => (
    <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  ),
};
