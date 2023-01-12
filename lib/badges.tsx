import { ClassValue, clsx } from 'clsx';
import type { FC } from 'react';
import { BadgeVariant, badgeVariants } from './badges.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import type { Align } from './layout.css.js';
import { Tone, toneVariants } from './tone.css.js';
import type { Merge } from './types.js';
import { Text } from './typography.js';

export type BadgeProps = {
  className?: ClassValue;
  variant?: BadgeVariant;
  align?: Align;
  tone?: Tone;
};

export const Badge: FC<
  Merge<BoxBasedComponentProps<'span' | 'a' | 'button'>, BadgeProps>
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
    className={clsx(className, toneVariants[tone], badgeVariants[variant])}
    {...props}
  >
    <Text size="tiny" textOverflow="ellipsis">
      {children}
    </Text>
  </Box>
);

type BadgeLinkProps = BadgeProps & {
  component?: never;
  href?: string;
};

export const BadgeLink: FC<
  Merge<BoxBasedComponentProps<'a' | 'button'>, BadgeLinkProps>
> = (props) => (
  <Badge component={'href' in props ? 'a' : 'button'} {...props} />
);
