import { ClassValue, clsx } from 'clsx';
import type { FC, ReactElement } from 'react';
import {
  busyButtonClass,
  ButtonVariant,
  buttonVariantClasses,
  compactButton,
  iconButtonClass,
  iconClass,
  inlineBleedClass,
} from './buttons.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import type { Align } from './layout.css.js';

export type ButtonCommonProps = {
  className?: ClassValue;
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  align?: Align;
  inline?: boolean;
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
      busy && busyButtonClass,
      buttonVariantClasses[variant],
      compact && compactButton,
      icon && iconButtonClass,
      inline && inlineBleedClass,
    )}
    {...props}
    // type={component === 'button' && !props.type ? 'button' : undefined}
  >
    {icon && <span className={iconClass}>{icon}</span>}
    {children}
  </Box>
);

export const ButtonLink: FC<
  BoxBasedComponentProps<'span' | 'a', ButtonProps>
> = ({ variant = 'standard', compact, busy, align, className, ...props }) => (
  <Button component={'href' in props ? 'a' : 'span'} {...props}></Button>
);

export const ButtonIcon: FC<
  BoxBasedComponentProps<'button', ButtonIconProps>
> = ({ children, ...props }) => (
  <Button {...props}>{<span className={iconClass}>{children}</span>}</Button>
);
