import { ClassValue, clsx } from 'clsx';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import {
  busyButton,
  compactButton,
  ButtonVariant,
  buttonVariantClasses,
} from './buttons.css.js';

export const Button: FC<
  PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
      className?: ClassValue;
      variant?: ButtonVariant;
      busy?: boolean;
      compact?: boolean;
    }
  >
> = ({
  className,
  busy,
  compact,
  type = 'button',
  variant = 'standard',
  ...props
}) => (
  <button
    className={clsx(
      busy && busyButton,
      buttonVariantClasses[variant],
      className,
      compact && compactButton,
    )}
    type={type}
    {...props}
  />
);
