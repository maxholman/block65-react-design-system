import { ClassValue, clsx } from 'clsx';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { ButtonVariant, buttonVariants } from './buttons.css.js';

export function variantToButtonVariant(variant: ButtonVariant) {
  return {
    [buttonVariants.standard]: variant === 'standard',
    [buttonVariants.ghost]: variant === 'ghost',
    [buttonVariants.subtle]: variant === 'subtle',
  };
}

export const Button: FC<
  PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
      className?: ClassValue;
      variant?: ButtonVariant;
    }
  >
> = ({ className, type = 'button', variant = 'standard', ...props }) => (
  <button
    className={clsx(variantToButtonVariant(variant), className)}
    type={type}
    {...props}
  />
);
