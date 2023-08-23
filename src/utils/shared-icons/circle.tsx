import { IconSvgProps } from './types';

export const CircleIcon = (props: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    width="1em"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);
