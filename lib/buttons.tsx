import { clsx } from 'clsx';
import {
  isValidElement,
  type FC,
  type PropsWithChildren,
  type ReactElement,
  forwardRef,
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
import type { Falsy } from './core.css.js';
import { Box } from './core.js';
import { Inline, type InlineProps } from './layout.js';
import { toneVariants, type Tone } from './tone.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { fontSizeVariants, type FontSize } from './typography.css.js';

export type ButtonCommonProps = {
  variant?: ButtonVariant;
  busy?: boolean;
  compact?: boolean;
  inline?: boolean;
  tone?: Tone;
  icon?: ReactElement | FC | Falsy;
  fontSize?: FontSize;
};

type ButtonInternalProps<
  T extends keyof ReactHTMLAttributesHacked = 'button' | 'a',
> = Merge<InlineProps<T>, ButtonCommonProps>;

export type ButtonProps<T extends keyof ReactHTMLAttributesHacked = 'button'> =
  PropsWithChildren<Merge<InlineProps<T>, ButtonCommonProps>>;

export type ButtonLinkProps<T extends keyof ReactHTMLAttributesHacked = 'a'> =
  Merge<
    ButtonInternalProps<T>,
    ButtonCommonProps & {
      safe?: boolean;
    }
  >;

// Extracted out to its own type because `isValidElement` and `ReactElement`
// don't have the same default value for props, so we need to specify it in
// code later. This keeps it clean if/when we remove it in future and avoids
// a stray `any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReactElementDefaultPropsType = any;

export type ButtonIconProps<
  T extends keyof ReactHTMLAttributesHacked = 'button',
> = Merge<
  ButtonInternalProps<T>,
  {
    label: string;
    icon: ReactElement<ReactElementDefaultPropsType>;
    children?: never;
  }
>;

const ButtonInternal = forwardRef<HTMLButtonElement, ButtonInternalProps>(
  (
    {
      component = 'button',
      variant = 'standard',
      tone = 'accent',
      rounded = 'medium',
      textOverflow = 'ellipsis',
      justifyContent = 'center',
      compact,
      busy,
      className,
      icon,
      inline,
      fontSize,
      children,
      ...props
    },
    ref,
  ) => (
    <Inline
      ref={ref}
      rounded={rounded}
      component={component}
      justifyContent={justifyContent}
      className={clsx(
        className,
        buttonVariantClasses[variant],
        toneVariants[tone],
        busy && busyButtonClass,
        compact && compactButton,
        fontSize && fontSizeVariants[fontSize],
        inline && inlineBleedClass,
      )}
      space="2"
      {...props}
      // if this is an actually button element - default to button so that it
      // doesnt submit forms by default
      {...(component === 'button' && {
        type: ('type' in props && props.type) || 'button',
      })}
    >
      {icon && (
        <Box
          component="span"
          className={[iconClass, busy && visiblyHiddenClass]}
        >
          {isValidElement<ReactElementDefaultPropsType>(icon) ? icon : icon({})}
        </Box>
      )}
      {/* possible it might just be an icon, no children */}
      {children && (
        <Box
          className={[busy && visiblyHiddenClass, icon && withIconClass]}
          aria-hidden={busy || undefined}
          textOverflow={textOverflow}
        >
          {children}
        </Box>
      )}
    </Inline>
  ),
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonInternal component="button" ref={ref} {...props} />,
);

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
