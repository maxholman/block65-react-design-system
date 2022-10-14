import { clsx } from 'clsx';
import type { FC } from 'react';
import {
  busyButton,
  buttonVariantClasses,
  compactButton,
} from './buttons.css.js';
import type { ButtonProps } from './buttons.js';
import { Box, BoxBasedComponentProps } from './core.js';
import { inlineAlignSelf } from './layout.css.js';
import { linkStyle } from './links.css.js';

export const TextLink: FC<BoxBasedComponentProps<'span' | 'a'>> = ({
  children,
  className,
  ...props
}) => (
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
  BoxBasedComponentProps<'span' | 'a', ButtonProps>
> = ({ variant = 'standard', compact, busy, align, className, ...props }) => (
  <Box
    component={'href' in props ? 'a' : 'span'}
    className={clsx(
      busy && busyButton,
      buttonVariantClasses[variant],
      className,
      compact && compactButton,
      align && inlineAlignSelf[align],
    )}
    {...props}
  />
);
