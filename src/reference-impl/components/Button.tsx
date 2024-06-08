import { forwardRef, type ForwardedRef } from 'react';
import {
  Button as RdsButton,
  ButtonIcon as RdsButtonIcon,
  ButtonLink as RdsButtonLink,
  type Falsy,
  type ButtonIconProps as RdsButtonIconProps,
  type ButtonLinkProps as RdsButtonLinkProps,
  type ButtonProps as RdsButtonProps,
  type ReactHTMLElements,
} from '../../../lib/main.js';
import type { Merge } from '../../../lib/types.js';
import {
  boxVariantClassName,
  toneVariantClassName,
  type RefBoxVariant,
} from '../core.css.js';
import type { Tone } from '../schemes.css.js';

type RefImplButtonProps = {
  tone?: Tone | Falsy;
  variant?: RefBoxVariant | Falsy;
};

type ButtonProps<T extends keyof ReactHTMLElements> = Merge<
  RdsButtonProps<T>,
  RefImplButtonProps
>;

type ButtonLinkProps = Merge<RdsButtonLinkProps, RefImplButtonProps>;

type ButtonIconProps<T extends keyof ReactHTMLElements> = Merge<
  RdsButtonIconProps<T>,
  RefImplButtonProps
>;

export const Button = forwardRef(
  <T extends keyof ReactHTMLElements>(
    { variant = 'solid', tone, className, ...props }: ButtonProps<T>,
    ref: ForwardedRef<ReactHTMLElements[T]>,
  ) => (
    <RdsButton
      ref={ref}
      rounded="2"
      {...props}
      className={[
        className,
        variant && boxVariantClassName[variant],
        tone && toneVariantClassName[tone],
      ]}
    />
  ),
);

export const ButtonIcon = forwardRef(
  <T extends keyof ReactHTMLElements>(
    {
      variant = 'solid',
      tone,
      className,
      children,
      ...props
    }: ButtonIconProps<T>,
    ref: ForwardedRef<ReactHTMLElements[T]>,
  ) => (
    <RdsButtonIcon
      ref={ref}
      {...props}
      rounded="2"
      className={[
        className,
        variant && boxVariantClassName[variant],
        tone && toneVariantClassName[tone],
      ]}
    />
  ),
);

export const ButtonLink = forwardRef(
  (
    { variant = 'solid', tone, className, ...props }: ButtonLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <RdsButtonLink
      ref={ref}
      {...props}
      rounded="2"
      className={[
        className,
        variant && boxVariantClassName[variant],
        tone && toneVariantClassName[tone],
      ]}
    />
  ),
);
