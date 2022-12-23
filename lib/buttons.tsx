import { ClassValue, clsx } from 'clsx';
import { FC, isValidElement, ReactElement } from 'react';
import {
  busyButtonClass,
  ButtonVariant,
  buttonVariantClasses,
  compactButton,
  iconClass,
  inlineBleedClass,
  visiblyHiddenClass,
  withIconClass,
} from './buttons.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import type { Align } from './layout.css.js';
import { Inline } from './layout.js';
import { Tone, toneVariants } from './tone.css.js';
import type { Merge } from './types.js';

export type ButtonCommonProps = {
  className?: ClassValue;
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  align?: Align;
  inline?: boolean;
  tone?: Tone;
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
  tone = 'accent',
  compact,
  busy,
  align,
  className,
  icon,
  inline,
  children,
  ...props
}) => (
  <Inline
    component={component}
    className={clsx(
      buttonVariantClasses[variant],
      toneVariants[tone],
      busy && busyButtonClass,
      compact && compactButton,
      inline && inlineBleedClass,
      className,
    )}
    space="tiny"
    textOverflow="ellipsis"
    {...props}
  >
    {icon && (
      <Box component="span" className={[iconClass, busy && visiblyHiddenClass]}>
        {isValidElement(icon) ? icon : icon({})}
      </Box>
    )}
    <Box
      className={[busy && visiblyHiddenClass, withIconClass]}
      aria-hidden={busy || undefined}
    >
      {children}
    </Box>
  </Inline>
);

export const Button: FC<
  Merge<BoxBasedComponentProps<'button'>, ButtonProps>
> = (props) => <ButtonInternal {...props} />;

export const ButtonLink: FC<
  Merge<BoxBasedComponentProps<'a' | 'span'>, ButtonLinkProps>
> = (props) => (
  <ButtonInternal
    component={'href' in props ? 'a' : 'span'}
    {...props}
    textOverflow="ellipsis"
  />
);

export const ButtonIcon: FC<
  Merge<BoxBasedComponentProps<'button'>, ButtonIconProps>
> = ({ icon, label, ...props }) => (
  <ButtonInternal aria-label={label} {...props} textOverflow="ellipsis">
    <span className={iconClass}>{icon}</span>
  </ButtonInternal>
);
