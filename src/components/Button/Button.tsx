import classNames from 'classnames';
import React, { ElementType, ReactNode, forwardRef } from 'react';
import {
  ComponentColor,
  ComponentShape,
  ComponentSize,
  IComponentBaseProps,
} from '../../global/types';
import Loading from '../Loading';
import ButtonIcon from './ButtonIcon';

const classPrefix = 'luna-btn';

type ITagProps = {
  a: {
    attr: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    ele: HTMLAnchorElement;
  };
  button: {
    attr: React.ButtonHTMLAttributes<HTMLButtonElement>;
    ele: HTMLButtonElement;
  };
  div: {
    attr: React.HTMLAttributes<HTMLDivElement>;
    ele: HTMLDivElement;
  };
  img: {
    attr: React.ImgHTMLAttributes<HTMLImageElement>;
    ele: HTMLImageElement;
  };
  input: {
    attr: React.InputHTMLAttributes<HTMLInputElement>;
    ele: HTMLInputElement;
  };
  label: {
    attr: React.LabelHTMLAttributes<HTMLLabelElement>;
    ele: HTMLLabelElement;
  };
  span: {
    attr: React.HTMLAttributes<HTMLSpanElement>;
    ele: HTMLSpanElement;
  };
};

export type GetTagProps<T extends ElementType> = T extends keyof ITagProps
  ? ITagProps[T]
  : ITagProps['button'];

export type ButtonProps<
  T extends ElementType = 'button',
  A extends React.HTMLAttributes<HTMLElement> = GetTagProps<T>['attr'],
> = Omit<A, 'color' | 'size'> &
  IComponentBaseProps & {
    shape?: ComponentShape;
    size?: ComponentSize;
    variant?: 'outline' | 'link';
    color?: ComponentColor;
    block?: boolean;
    loading?: boolean;
    animation?: boolean;
    active?: boolean;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    as?: T;
  };

//  https://developer.mozilla.org/en-US/docs/Glossary/Void_element
const VoidElementList: ElementType[] = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

/**
 * Buttons allow the user to take actions or make choices.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    shape,
    size,
    variant,
    color,
    block,
    loading,
    animation = true,
    active,
    disabled,
    startIcon,
    endIcon,
    dataTheme,
    className,
    style,
    children,
    as: Component = 'button',
    ...rest
  } = props;

  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-lg`]: size === 'lg',
    [`${classPrefix}-md`]: size === 'md',
    [`${classPrefix}-sm`]: size === 'sm',
    [`${classPrefix}-xs`]: size === 'xs',
    [`${classPrefix}-circle`]: shape === 'circle',
    [`${classPrefix}-square`]: shape === 'square',
    [`${classPrefix}-outline`]: variant === 'outline',
    [`${classPrefix}-link`]: variant === 'link',
    [`${classPrefix}-block`]: block,
    [`${classPrefix}-no-animation`]: !animation,
    [`${classPrefix}-active`]: active,
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-loading`]: loading,
    [`${classPrefix}-${color}`]: color,
  });

  if (VoidElementList.includes(Component)) {
    return (
      <Component
        {...rest}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={style}
        disabled={disabled}
      />
    );
  } else {
    return (
      <Component
        {...rest}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={style}
        disabled={disabled}
      >
        {!startIcon && loading && <Loading variant="spinner" size={size} />}
        {startIcon && !loading && <ButtonIcon>{startIcon}</ButtonIcon>}
        {children}
        {endIcon && <ButtonIcon>{endIcon}</ButtonIcon>}
      </Component>
    );
  }
});

Button.displayName = 'Button';

export default Button as <
  T extends ElementType = 'button',
  E extends HTMLElement = GetTagProps<T>['ele'],
  A extends React.HTMLAttributes<HTMLElement> = GetTagProps<T>['attr'],
>(
  props: ButtonProps<T, A> & { ref?: React.Ref<E> },
) => JSX.Element;
