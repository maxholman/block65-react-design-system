import {
  cloneElement,
  forwardRef,
  isValidElement,
  type FC,
  type ForwardedRef,
  type ReactElement,
} from 'react';
import styles from './button.module.scss';
import { differentOriginLinkProps } from './component-utils.js';
import { Box, BoxProps } from './core.js';
import { Flex, type FlexProps } from './layout.js';
import type { Merge, ReactHTMLElementsHacked, Falsy } from './types.js';
import { ExactText } from './typography.js';

// Extracted out to its own type because `isValidElement` and `ReactElement`
// don't have the same default value for props, so we need to specify it in
// code later. This keeps it clean if/when we remove it in future and avoids
// a stray `any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReactElementDefaultPropsType = any;

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant =
  | 'default'
  | 'danger'
  | 'invisible'
  | 'inactive'
  | 'primary';

export type ButtonCommonProps = {
  busy?: boolean | undefined;
  disabled?: boolean | undefined;

  inline?: boolean | undefined;
  icon?: ReactElement | FC | Falsy;
  iconStart?: ReactElement | FC | Falsy;
  iconEnd?: ReactElement | FC | Falsy;

  variant?: ButtonVariant | Falsy;

  size?: ButtonSize | Falsy;
};

export type ButtonProps<T extends keyof ReactHTMLElementsHacked = 'button'> =
  Merge<FlexProps<T>, ButtonCommonProps>;

export type ButtonLinkProps = Merge<
  ButtonProps<'a'>,
  {
    safe?: boolean;
  }
>;

export type ButtonIconProps<
  T extends keyof ReactHTMLElementsHacked = 'button',
> = Merge<
  ButtonProps<T>,
  {
    label: string;
    icon: ReactElement<ReactElementDefaultPropsType>;
  }
>;

/** @private */
const IconBox: FC<{
  icon: ReactElement | FC;
  busy?: boolean | Falsy;
}> = ({ icon, busy }) => (
  <Box component="span" className={[styles.icon, busy && styles.visiblyHidden]}>
    {isValidElement<ReactElementDefaultPropsType>(icon)
      ? cloneElement(icon, { className: styles.icon })
      : icon({ className: styles.icon })}
  </Box>
);

export const UnstyledButton = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'button'>(
    { className, ...props }: FlexProps<T>,
    forwardedRef: ForwardedRef<HTMLElement>,
  ) => (
    <Flex
      component="button"
      ref={forwardedRef}
      className={[className, styles.button]}
      // if this is going to be an actual button element - default to button
      // type so that it doesn't submit forms by default
      {...((!props.component || props.component === 'button') && {
        type: 'type' in props ? props.type : 'button',
      })}
      {...props}
    />
  ),
);

function getSizeProps(size: ButtonSize | Falsy) {
  switch (size) {
    case 'small':
      return {
        fontSize: '0',
        paddingBlock: '4',
        paddingInline: '5',
      } satisfies BoxProps;
    case 'large':
      return {
        fontSize: '3',
        paddingBlock: '6',
        paddingInline: '7',
      } satisfies BoxProps;
    case 'medium':
    default:
      return {
        paddingBlock: '6',
        paddingInline: '7',
      } satisfies BoxProps;
  }
}

export const Button = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'button'>(
    {
      textAlign = 'center',
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
      size = 'medium',
      variant = 'default',
      ...props
    }: ButtonProps<T>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const { fontSize, ...buttonSizeProps } = getSizeProps(size);

    const finalProps = {
      ...buttonSizeProps,
      ...props,
    };

    return (
      <UnstyledButton
        ref={ref}
        space="2"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        {...finalProps}
        className={[
          className,
          variant && styles[variant],
          busy && styles.busy,
          inline && styles.inlineBleed,
        ]}
      >
        {iconStart && <IconBox icon={iconStart} busy={busy} />}

        {children && (
          <ExactText
            component="div"
            textAlign={textAlign}
            fontSize={fontSize}
            className={[busy && styles.visiblyHidden]}
            aria-hidden={busy || undefined}
            aria-live={busy ? 'polite' : undefined}
          >
            {children}
          </ExactText>
        )}

        {iconEnd && <IconBox icon={iconEnd} busy={busy} />}
      </UnstyledButton>
    );
  },
);

export const ButtonLink = forwardRef(
  (
    { safe = true, ...props }: ButtonLinkProps,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked['a']>,
  ) => (
    <Button
      ref={forwardedRef}
      component="a"
      {...(safe && props.href && differentOriginLinkProps(props.href))}
      {...props}
    />
  ),
);

export const ButtonIcon = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'button'>(
    { label, ...props }: ButtonIconProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => <Button ref={forwardedRef} aria-label={label} {...props} />,
);
