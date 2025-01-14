import { ClassValue, clsx } from 'clsx';
import type { FC, ReactElement } from 'react';
import {
  busyButtonClass,
  ButtonVariant,
  buttonVariantClasses,
  compactButton,
  iconClass,
  inlineBleedClass,
  visiblyHiddenClass,
} from './buttons.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import type { Align } from './layout.css.js';
import { Inline } from './layout.js';
import type { Tone } from './schemes/color.css.js';
import { toneVariants } from './typography.css.js';

export type ButtonCommonProps = {
  className?: ClassValue;
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  align?: Align;
  inline?: boolean;
  tone?: Tone;
};

export type ButtonProps = ButtonCommonProps & {
  icon?: ReactElement;
};

export type ButtonIconProps = ButtonCommonProps & {};

export const Button: FC<
  BoxBasedComponentProps<'button' | 'a' | 'span', ButtonProps>
> = ({
  component = 'button',
  variant = 'standard',
  tone,
  compact,
  busy,
  align,
  className,
  icon,
  inline,
  children,
  ...props
}) => (
  <Box
    component={component}
    className={clsx(
      className,
      buttonVariantClasses[variant],
      busy && busyButtonClass,
      tone && toneVariants[tone],
      compact && compactButton,
      inline && inlineBleedClass,
    )}
    {...props}
  >
    <Inline
      space="tiny"
      className={busy && visiblyHiddenClass}
      aria-hidden={busy || undefined}
    >
      {icon && <span className={iconClass}>{icon}</span>}
      {children}
    </Inline>
  </Box>
);

export const ButtonLink: FC<
  Omit<BoxBasedComponentProps<'a', ButtonProps>, 'component'> & {
    href?: string;
  }
> = (props) => <Button component={'href' in props ? 'a' : 'span'} {...props} />;

export const ButtonIcon: FC<
  BoxBasedComponentProps<'button', ButtonIconProps> & { label: string }
> = ({ children, label, ...props }) => (
  <Button aria-label={label} {...props}>
    <span className={iconClass}>{children}</span>
  </Button>
);
