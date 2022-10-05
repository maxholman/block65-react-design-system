import type { ClassValue } from 'clsx';
import type {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import { ButtonVariant, buttonVariantClasses } from './buttons.css.js';
import { Box } from './core.js';
import { linkStyle } from './links.css.js';

export const TextLink: FC<
  | PropsWithChildren<
      HTMLAttributes<HTMLSpanElement> & {
        className?: ClassValue;
      }
    >
  | PropsWithChildren<
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        className?: ClassValue;
      }
    >
> = ({ children, className, ...props }) => (
  <Box
    // if someone is trying to use it as a link, use an anchor tag
    component={'href' in props ? 'a' : 'span'}
    className={[linkStyle, className]}
    {...props}
  >
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
