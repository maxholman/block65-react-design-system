import {
  forwardRef,
  isValidElement,
  type FC,
  type ReactElement,
  type ForwardedRef,
} from 'react';
import {
  busyButtonClass,
  buttonClassName,
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
  iconStart?: ReactElement | FC | Falsy;
  iconEnd?: ReactElement | FC | Falsy;
  fontSize?: FontSize;
};

type ButtonInternalProps<
  T extends keyof ReactHTMLAttributesHacked = 'button' | 'a',
> = Merge<FlexProps<T>, ButtonCommonProps>;

export type ButtonProps<T extends keyof ReactHTMLAttributesHacked = 'button'> =
  ButtonInternalProps<T>;

export type ButtonLinkProps<T extends keyof ReactHTMLAttributesHacked = 'a'> =
  Merge<
    ButtonInternalProps<T>,
    {
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

const MaybeIcon: FC<{
  icon?: ReactElement | FC | Falsy;
  busy?: boolean | Falsy;
}> = ({ icon, busy }) =>
  icon ? (
    <Flex
      component="span"
      alignItems="center"
      className={[iconClass, busy && visiblyHiddenClass]}
    >
      {isValidElement<ReactElementDefaultPropsType>(icon) ? icon : icon({})}
    </Flex>
  ) : null;

const buttonVariantProps: Record<ButtonVariant, FlexProps> = {
  none: {
    background: 'none',
    borderVariant: 'transparent',
  },
  solid: {
    background: '3',
    borderVariant: 'normal',
    borderTone: 'accent',
  },
  ghost: {
    background: '1',
    backgroundHover: '2',
    borderVariant: 'normal',
    borderTone: 'accent',
    borderHover: 'normal',
  },
  subtle: {
    background: '2',
    backgroundHover: '2',
    borderVariant: 'subtle',
  },
  transparent: {
    background: 'none',
    borderVariant: 'transparent',
    backgroundHover: '1',
  },
};

function getVariantProps(variant: ButtonVariant, tone: Tone) {
  return {
    ...buttonVariantProps[variant],
    borderTone: tone,
  };
}

const ButtonInternal = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'button'>(
    {
      component = 'button',
      variant = 'solid',
      tone = 'accent',
      space = '2',
      flexDirection = 'row',
      compact,
      busy,
      className,
      icon,
      iconStart,
      iconEnd,
      inline,
      fontSize,
      children,
      padding,
      paddingBlock,
      paddingInline,
      flexGrow,
      ...props
    }: ButtonInternalProps<T>,
    ref: ForwardedRef<HTMLButtonElement>,
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
              : paddingInline || padding || '5',
        };

    return (
      <Flex
        ref={ref}
        component={component}
        flexGrow={flexGrow}
        space={space}
        flexDirection={flexDirection}
        {...getVariantProps(variant, tone)}
        {...paddingAndFontProps}
        {...props}
        className={[
          className,
          // buttonVariantClasses[variant],
          buttonClassName,
          toneVariants[tone],
          busy && busyButtonClass,
          inline && inlineBleedClass,
        ]}
        // if this is going to be an actual button element - default to button
        // typeo so that it doesn't submit forms by default
        {...(component === 'button' && {
          type: ('type' in props && props.type) || 'button',
        })}
      >
        <MaybeIcon icon={iconStart || icon} busy={busy} />

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
            alignItems="center"
            flexGrow={flexGrow}
            justifyContent="center"
            space={space}
          >
            {children}
          </Flex>
        )}
        {iconEnd && <MaybeIcon icon={iconEnd} busy={busy} />}
      </Flex>
    );
  },
);

export const Button = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'button'>(
    props: ButtonProps<T>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <ButtonInternal
      component="button"
      ref={ref}
      rounded="medium"
      justifyContent="center"
      alignItems="center"
      space="2"
      flexWrap="nowrap"
      textAlign="center"
      borderWidth="2"
      {...props}
    />
  ),
);

export const ButtonLink: FC<ButtonLinkProps> = ({ safe = true, ...props }) => (
  <Button
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
