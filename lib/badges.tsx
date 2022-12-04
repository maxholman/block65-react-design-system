import { ClassValue, clsx } from 'clsx';
import type { FC } from 'react';
import {
  badgeToneVariants,
  BadgeVariant,
  badgeVariantClasses,
} from './badges.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import type { Align } from './layout.css.js';
import type { Tone } from './schemes/color.css.js';

export type BadgeProps = {
  className?: ClassValue;
  variant?: BadgeVariant;
  align?: Align;
  tone?: Tone;
};

export const Badge: FC<
  BoxBasedComponentProps<'span' | 'a' | 'button', BadgeProps>
> = ({
  component = 'span',
  variant = 'standard',
  tone = 'info',
  align,
  className,
  children,
  ...props
}) => (
  <Box
    component={component}
    className={clsx(
      className,
      badgeToneVariants[tone],
      badgeVariantClasses[variant],
    )}
    {...props}
  >
    {children}
  </Box>
);

export const BadgeLink: FC<
  Omit<BoxBasedComponentProps<'a' | 'button', BadgeProps>, 'component'> & {
    href?: string;
  }
> = (props) => (
  <Badge component={'href' in props ? 'a' : 'button'} {...props} />
);
