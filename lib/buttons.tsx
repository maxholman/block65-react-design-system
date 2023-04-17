import { clsx } from 'clsx';
import {
  forwardRef,
  isValidElement,
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import {
  busyButtonClass,
  buttonVariantClasses,
  iconClass,
  inlineBleedClass,
  visiblyHiddenClass,
  withIconClass,
  type ButtonVariant,
} from './buttons.css.js';
import { differentOriginLinkProps } from './component-utils.js';
import type { Falsy } from './core.css.js';
import { Flex, type FlexProps } from './layout.js';
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
> = Merge<FlexProps<T>, ButtonCommonProps>;

export type ButtonProps<T extends keyof ReactHTMLAttributesHacked = 'button'> =
  PropsWithChildren<Merge<FlexProps<T>, ButtonCommonProps>>;

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
      space = '2',
      compact,
      busy,
      className,
      icon,
      inline,
      fontSize,
      children,
      padding,
      paddingBlock,
      paddingInline,
      flexDirection = 'row',
      flexGrow,
      ...props
    },
    ref,
  ) => {
    const paddingAndFontProps: FlexProps = compact
      ? {
          className: fontSizeVariants[fontSize || 0],
          paddingBlock:
            paddingBlock === null
              ? paddingBlock
              : paddingBlock || padding || '2',

          paddingInline:
            paddingInline === null
              ? paddingInline
              : paddingInline || padding || '3',
        }
      : {
          className: fontSize && fontSizeVariants[fontSize],
          paddingBlock:
            paddingBlock === null
              ? paddingBlock
              : paddingBlock || padding || '3',

          paddingInline:
            paddingInline === null
              ? paddingInline
              : paddingInline || padding || '4',
        };

    return (
      <Flex
        ref={ref}
        component={component}
        rounded="medium"
        justifyContent="center"
        space="2"
        flexWrap="nowrap"
        textAlign="center"
        flexGrow={flexGrow}
        flexDirection={flexDirection}
        {...paddingAndFontProps}
        {...props}
        className={clsx(
          className,
          toneVariants[tone],
          buttonVariantClasses[variant],
          busy && busyButtonClass,
          inline && inlineBleedClass,
        )}
        // if this is an actually button element - default to button so that it
        // doesn't submit forms by default
        {...(component === 'button' && {
          type: ('type' in props && props.type) || 'button',
        })}
      >
        {icon && (
          <Flex
            component="span"
            alignItems="center"
            className={[iconClass, busy && visiblyHiddenClass]}
          >
            {isValidElement<ReactElementDefaultPropsType>(icon)
              ? icon
              : icon({})}
          </Flex>
        )}
        {/* possible it might just be an icon, no children */}
        {children && (
          <Flex
            className={[
              paddingAndFontProps.className,
              busy && visiblyHiddenClass,
              icon && withIconClass,
            ]}
            aria-hidden={busy || undefined}
            aria-live={busy ? 'polite' : undefined}
            flexDirection={flexDirection}
            flexGrow={flexGrow}
            justifyContent="center"
            space={space}
          >
            {children}
          </Flex>
        )}
      </Flex>
    );
  },
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonInternal component="button" ref={ref} {...props} />,
);

export const ButtonLink: FC<ButtonLinkProps> = ({ safe = true, ...props }) => (
  <ButtonInternal
    component="a"
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);

export const ButtonIcon: FC<ButtonIconProps> = ({ icon, label, ...props }) => (
  <ButtonInternal
    aria-label={label}
    space="0"
    alignItems="center"
    justifyContent="center"
    paddingInline="7"
    className={[iconClass]}
    icon={icon}
    {...props}
  />
);
