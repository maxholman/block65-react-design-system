import type { ClassValue } from 'clsx';
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import { ButtonVariant, buttonVariantClasses } from './buttons.css.js';
import { Box } from './core.js';
import { linkStyle } from './links.css.js';

export const TextLink: FC<
  PropsWithChildren<
    AnchorHTMLAttributes<HTMLAnchorElement> & {
      className?: ClassValue;
    }
  >
> = ({ children, className, ...props }) => (
  <Box component="span" className={[linkStyle, className]} {...props}>
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
    component="span"
    className={[buttonVariantClasses[variant], className]}
    {...props}
  />
);
