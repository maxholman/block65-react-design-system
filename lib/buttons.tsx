import { ClassValue, clsx } from 'clsx';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import type { Merge } from 'type-fest';
import {
  busyButton,
  compactButton,
  ButtonVariant,
  buttonVariantClasses,
} from './buttons.css.js';
import { Align, inlineAlignSelf } from './layout.css.js';

export type ButtonProps = {
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  className?: ClassValue;
  align?: Align;
};

export const Button: FC<
  PropsWithChildren<
    Merge<
      ButtonHTMLAttributes<HTMLButtonElement>,
      {
        variant?: ButtonVariant;
        busy?: boolean;
        compact?: boolean;
        className?: ClassValue;
        align?: Align;
      }
    >
  >
> = ({
  variant = 'standard',
  type = 'button',
  compact,
  busy,
  align,
  className,
  ...props
}) => (
  <button
    className={clsx(
      busy && busyButton,
      buttonVariantClasses[variant],
      className,
      compact && compactButton,
      align && inlineAlignSelf[align],
    )}
    type={type}
    {...props}
  />
);
