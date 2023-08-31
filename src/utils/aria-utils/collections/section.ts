export { Section as BaseSection } from '@react-stately/collections';
import { SectionProps as BaseSectionProps } from '@react-types/shared';
import { As, HTMLProps } from '../../system';

/**
 * A modified version of the SectionProps from @react-types/shared, with the addition of the NextUI props.
 *
 */
export type SectionProps<Type extends As = 'div', T extends object = {}> = BaseSectionProps<T> &
  HTMLProps<Type>;
