import {
  cloneElement,
  forwardRef,
  isValidElement,
  type FC,
  type ForwardedRef,
  type ReactElement,
} from 'react';
import {
  busyButtonClass,
  buttonClassName,
  iconClass,
  inlineBleedClass,
  visiblyHiddenClass,
} from './buttons.css.js';
import { differentOriginLinkProps } from './component-utils.js';
import type { Falsy } from './core.css.js';
import { Box, type BoxProps } from './core.js';
import { Flex, type FlexProps, type Variant } from './layout.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';
import { Text } from './typography.js';

type ButtonVariant = Variant;

export type ButtonCommonProps = {
  busy?: boolean | undefined;
  disabled?: boolean | undefined;
  compact?: boolean | undefined;
  inline?: boolean | undefined;
  icon?: ReactElement | FC | Falsy;
  iconStart?: ReactElement | FC | Falsy;
  iconEnd?: ReactElement | FC | Falsy;
  variant?: ButtonVariant | Falsy;
};

export type ButtonLinkProps<T extends keyof ReactHTMLAttributesHacked = 'a'> =
  Merge<
    ButtonProps<T>,
    {
      safe?: boolean;
    }
  >;

export type ButtonProps<T extends keyof ReactHTMLAttributesHacked = 'button'> =
  Merge<FlexProps<T>, ButtonCommonProps>;

// Extracted out to its own type because `isValidElement` and `ReactElement`
// don't have the same default value for props, so we need to specify it in
// code later. This keeps it clean if/when we remove it in future and avoids
// a stray `any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReactElementDefaultPropsType = any;

export type ButtonIconProps<
  T extends keyof ReactHTMLAttributesHacked = 'button',
> = Merge<
  ButtonProps<T>,
  {
    label: string;
    icon: ReactElement<ReactElementDefaultPropsType>;
    children?: never;
  }
>;

const IconBox: FC<{
  icon: ReactElement | FC;
  busy?: boolean | Falsy;
}> = ({ icon, busy }) => (
  <Box component="span" className={[iconClass, busy && visiblyHiddenClass]}>
    {isValidElement<ReactElementDefaultPropsType>(icon)
      ? cloneElement(icon, { className: iconClass })
      : icon({ className: iconClass })}
  </Box>
);

function getButtonVariantProps({
  variant,
  disabled,
}: Partial<Pick<ButtonCommonProps, 'disabled' | 'variant'>>): Pick<
  BoxProps,
  'background' | 'backgroundHover' | 'border' | 'borderHover' | 'foreground'
> {
  switch (variant) {
    case 'solid':
      return {
        foreground: disabled ? '6' : '3',
        background: disabled ? '2' : '6',
        border: disabled ? '5' : '6',
        borderHover: '7',
      };
    case 'vibrant':
      return {
        background: '10',
        border: '10',
      };
    case 'ghost':
      return {
        border: disabled ? '5' : '6',
        foreground: disabled ? '6' : '8',
        background: disabled ? '0' : '1',
        backgroundHover: '1',
      };
    case 'subtle':
      return {
        foreground: disabled ? '6' : '14',
        borderHover: '4',
        background: '3',
      };
    case 'transparent': {
      return {
        foreground: '6',
        borderHover: null,
        backgroundHover: '1',
      };
    }
    case 'none':
    default:
      return {};
  }
}

export const UnstyledButton = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'button'>(
    { className, ...props }: FlexProps<T>,
    forwardedRef: ForwardedRef<HTMLElement>,
  ) => (
    <Flex
      component="button"
      ref={forwardedRef}
      className={[className, buttonClassName]}
      // if this is going to be an actual button element - default to button
      // type so that it doesn't submit forms by default
      {...(props.component === 'button' && {
        type: ('type' in props && props.type) || 'button',
      })}
      {...props}
    />
  ),
);

export const Button = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'button'>(
    {
      variant = 'solid',
      textAlign = 'center',
      compact,
      busy,
      className,
      icon,
      iconStart = icon,
      iconEnd,
      inline,
      children,
      padding,
      paddingBlock,
      paddingInline,
      flexGrow,
      ...props
    }: ButtonProps<T>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const compactProps = (
      compact
        ? {
            fontSize: '0',
            paddingBlock:
              paddingBlock === null
                ? paddingBlock
                : paddingBlock || padding || '3',

            paddingInline:
              paddingInline === null
                ? paddingInline
                : paddingInline || padding || '4',
          }
        : {
            fontSize: '1',
            paddingBlock:
              paddingBlock === null
                ? paddingBlock
                : paddingBlock || padding || '5',

            paddingInline:
              paddingInline === null
                ? paddingInline
                : paddingInline || padding || '5',
          }
    ) satisfies FlexProps;

    return (
      <UnstyledButton
        ref={ref}
        space="2"
        tone="accent"
        flexDirection="row"
        flexWrap="nowrap"
        rounded="medium"
        justifyContent="center"
        alignItems="center"
        borderWidth="2"
        backgroundHover="auto"
        {...getButtonVariantProps({ variant, disabled: props.disabled })}
        {...compactProps}
        {...props}
        className={[
          className,
          busy && busyButtonClass,
          inline && inlineBleedClass,
        ]}
      >
        {iconStart && <IconBox icon={iconStart} busy={busy} />}

        {children && (
          <Text
            component="div"
            textAlign={textAlign}
            fontSize={compactProps.fontSize}
            className={[busy && visiblyHiddenClass]}
            aria-hidden={busy || undefined}
            aria-live={busy ? 'polite' : undefined}
          >
            {children}
          </Text>
        )}

        {iconEnd && <IconBox icon={iconEnd} busy={busy} />}
      </UnstyledButton>
    );
  },
);

export const ButtonLink: FC<ButtonLinkProps> = ({ safe = true, ...props }) => (
  <Button
    component="a"
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);

export const ButtonIcon = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'button'>(
    { label, ...props }: ButtonIconProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => <Button ref={forwardedRef} aria-label={label} {...props} />,
);
