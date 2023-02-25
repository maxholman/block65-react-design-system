import { clsx } from 'clsx';
import {
  isValidElement,
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import {
  busyButtonClass,
  buttonVariantClasses,
  compactButton,
  iconClass,
  inlineBleedClass,
  visiblyHiddenClass,
  withIconClass,
  type ButtonVariant,
} from './buttons.css.js';
import { differentOriginLinkProps } from './component-utils.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { Inline } from './layout.js';
import { toneVariants, type Tone } from './tone.css.js';
import type { Merge } from './types.js';
import { type FontSize, fontSizeVariants } from './typography.css.js';

export type ButtonCommonProps = {
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  inline?: boolean;
  tone?: Tone;
  icon?: ReactElement | FC | undefined;
  fontSize?: FontSize;
};

export type ButtonProps = PropsWithChildren<
  Merge<BoxBasedComponentProps<'button'>, ButtonCommonProps>
>;

export type ButtonLinkProps = Merge<
  BoxBasedComponentProps<'a'>,
  ButtonCommonProps & {
    safe?: boolean;
  }
>;

export type ButtonIconProps = Merge<
  ButtonCommonProps,
  {
    label: string;
    icon: ReactElement;
    children?: never;
  }
>;

const ButtonInternal: FC<
  Merge<BoxBasedComponentProps<'button' | 'a'>, ButtonCommonProps>
> = ({
  component = 'button',
  variant = 'standard',
  tone = 'accent',
  rounded = 'medium',
  textOverflow = 'ellipsis',
  compact,
  busy,
  className,
  icon,
  inline,
  fontSize,
  children,
  ...props
}) => (
  <Inline
    rounded={rounded}
    component={component}
    className={clsx(
      className,
      buttonVariantClasses[variant],
      toneVariants[tone],
      busy && busyButtonClass,
      compact && compactButton,
      fontSize && fontSizeVariants[fontSize],
      inline && inlineBleedClass,
    )}
    space="nano"
    {...props}
    {...(component === 'button' && {
      type: ('type' in props && props.type) || 'button',
    })}
  >
    {icon && (
      <Box component="span" className={[iconClass, busy && visiblyHiddenClass]}>
        {isValidElement(icon) ? icon : icon({})}
      </Box>
    )}
    <Box
      className={[busy && visiblyHiddenClass, icon && withIconClass]}
      aria-hidden={busy || undefined}
      textOverflow={textOverflow}
    >
      {children}
    </Box>
  </Inline>
);

export const Button: FC<ButtonProps> = (props) => <ButtonInternal {...props} />;

export const ButtonLink: FC<ButtonLinkProps> = ({
  component = 'a',
  safe = true,
  ...props
}) => (
  <ButtonInternal
    component={component}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);

export const ButtonIcon: FC<ButtonIconProps> = ({ icon, label, ...props }) => (
  <ButtonInternal aria-label={label} {...props} textOverflow="ellipsis">
    <span className={iconClass}>{icon}</span>
  </ButtonInternal>
);
