import {
  cloneElement,
  forwardRef,
  isValidElement,
  type FC,
  type ForwardedRef,
  type ReactElement,
} from 'react';
import {
  type ButtonVariant,
  busyButtonClass,
  buttonClassName,
  iconClass,
  inlineBleedClass,
  visiblyHiddenClass,
  buttonVariantClassNames,
} from './button.css.js';
import { differentOriginLinkProps } from './component-utils.js';
import type { Falsy } from './core.css.js';
import { Box } from './core.js';
import { Flex, type FlexProps } from './layout.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { ExactText } from './typography.js';

// Extracted out to its own type because `isValidElement` and `ReactElement`
// don't have the same default value for props, so we need to specify it in
// code later. This keeps it clean if/when we remove it in future and avoids
// a stray `any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReactElementDefaultPropsType = any;

export type ButtonCommonProps = {
  busy?: boolean | undefined;
  disabled?: boolean | undefined;

  inline?: boolean | undefined;
  icon?: ReactElement | FC | Falsy;
  iconStart?: ReactElement | FC | Falsy;
  iconEnd?: ReactElement | FC | Falsy;

  variant?: ButtonVariant | Falsy;
};

export type ButtonLinkProps = Merge<
  ButtonProps<'a'>,
  {
    safe?: boolean;
  }
>;

export type ButtonProps<T extends keyof ReactHTMLElementsHacked = 'button'> =
  Merge<Omit<FlexProps<T>, 'fontSize'>, ButtonCommonProps>;

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
  <Box component="span" className={[iconClass, busy && visiblyHiddenClass]}>
    {isValidElement<ReactElementDefaultPropsType>(icon)
      ? cloneElement(icon, { className: iconClass })
      : icon({ className: iconClass })}
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
      capSize = '1',
      variant = 'default',
      ...props
    }: ButtonProps<T>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const baseProps = {
      paddingBlock:
        paddingBlock === null ? paddingBlock : paddingBlock || padding || '6',

      paddingInline:
        paddingInline === null
          ? paddingInline
          : paddingInline || padding || '7',
    } satisfies FlexProps;

    return (
      <UnstyledButton
        ref={ref}
        space="2"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        borderWidth="2"
        {...baseProps}
        {...props}
        className={[
          className,
          variant && buttonVariantClassNames[variant],
          busy && busyButtonClass,
          inline && inlineBleedClass,
        ]}
      >
        {iconStart && <IconBox icon={iconStart} busy={busy} />}

        {children && (
          <ExactText
            component="div"
            textAlign={textAlign}
            capSize={capSize}
            className={[busy && visiblyHiddenClass]}
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
