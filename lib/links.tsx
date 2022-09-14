import { ClassValue, clsx } from 'clsx';
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import type { ButtonVariant } from './buttons.css.js';
import { variantToButtonVariant } from './buttons.js';
import { Box } from './core.js';
import { linkStyle } from './links.css.js';

export const TextLink: FC<
  PropsWithChildren<
    AnchorHTMLAttributes<HTMLAnchorElement> & {
      className?: ClassValue;
    }
  >
> = ({ children, className, ...props }) => (
  <Box component="a" className={clsx(linkStyle, className)} {...props}>
    {children}
  </Box>
);

export const ButtonLink: FC<
  PropsWithChildren<
    AnchorHTMLAttributes<HTMLAnchorElement> & {
      className?: ClassValue;
      variant?: ButtonVariant;
    }
  >
> = ({ className, variant = 'standard', ...props }) => (
  <Box
    component="a"
    className={clsx(variantToButtonVariant(variant), className)}
    {...props}
  />
);
