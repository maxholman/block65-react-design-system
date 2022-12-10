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
import type { Merge } from './types.js';
import type { Tone } from './schemes/color.css.js';
import { toneVariants } from './typography.css.js';

export type ButtonCommonProps = {
  className?: ClassValue;
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  align?: Align;
  inline?: boolean;
  tone?: ButtonTone;
  icon?: ReactElement | FC | undefined;
};

export type ButtonProps = Merge<
  ButtonCommonProps,
  {
    children: string;
  }
>;

export type ButtonLinkProps = Merge<
  ButtonCommonProps,
  {
    children?: string | undefined;
    component?: never;
    href?: string;
  }
>;

export type ButtonIconProps = Merge<
  ButtonCommonProps,
  {
    label: string;
    icon: ReactElement;
    children?: never | undefined;
  }
>;

const ButtonInternal: FC<
  Merge<BoxBasedComponentProps<'button' | 'a' | 'span'>, ButtonCommonProps>
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
