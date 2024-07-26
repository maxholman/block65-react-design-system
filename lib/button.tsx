import {
  forwardRef,
  type FC,
  type ForwardedRef,
  type ReactElement,
  isValidElement,
} from 'react';
import { Box, type BoxProps } from './box.js';
import type { ButtonState, ButtonVariant } from './button.css.js';
import {
  busyButtonClass,
  buttonClassName,
  buttonStateClassNames,
  buttonVariantClassNames,
  iconClassName,
  inlineBleedClass,
  visiblyHiddenClass,
  busySpinnerClass,
} from './button.css.js';
import { differentOriginLinkProps } from './component-utils.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Flex, type FlexProps } from './layout.js';
import { Spinner } from './loaders.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';
import { ExactText, type FontSize } from './typography.js';

export { ButtonState, ButtonVariant };

// Extracted out to its own type because `isValidElement` and `ReactElement`
// don't have the same default value for props, so we need to specify it in
// code later. This keeps it clean if/when we remove it in future and avoids
// a stray `any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReactElementDefaultPropsType = any;

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonCommonProps = {
  busy?: boolean | undefined;
  disabled?: boolean | undefined;

  inline?: boolean | undefined;
  icon?: ReactElement | FC | Falsy;
  iconStart?: ReactElement | FC | Falsy;
  iconEnd?: ReactElement | FC | Falsy;

  variant?: ButtonVariant | Falsy;
  size?: ButtonSize | Falsy;
  state?: ButtonState | Falsy;
};

export type ButtonProps<T extends keyof ReactHTMLElementsHacked = 'button'> =
  Merge<FlexProps<T>, ButtonCommonProps>;

export type ButtonLinkProps = Merge<
  FlexProps<'a'>,
  ButtonCommonProps & {
    safe?: boolean;
  }
>;

export type ButtonIconProps<
  T extends keyof ReactHTMLElementsHacked = 'button',
> = Merge<
  FlexProps<T>,
  ButtonCommonProps & {
    label: string;
    icon: ReactElement<ReactElementDefaultPropsType>;
  }
>;

const IconBox: FC<BoxProps<'span'> & {
  icon: ReactElement | FC;
  capSize?: FontSize;
}> = ({ icon, className, ...props }) => (
  <Box {...props} component="span" className={[className, iconClassName]}>
    {isValidElement<ReactElementDefaultPropsType>(icon)
      ? icon
      : icon({} /* { className: iconClassName } */)}
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
        space: '2',
        fontSize: '0',
        paddingBlock: '4',
        paddingInline: '5',
      } satisfies BoxProps;
    case 'large':
      return {
        space: '3',
        fontSize: '3',
        paddingBlock: '6',
        paddingInline: '7',
      } satisfies BoxProps;
    case 'medium':
    default:
      return {
        space: '2',
        fontSize: '1',
        paddingBlock: '5',
        paddingInline: '6',
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
      state,
      size = 'medium',
      variant,
      ...props
    }: ButtonProps<T>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const isStringLike = useStringLikeDetector();
    const { fontSize, ...buttonSizeProps } = getSizeProps(size);

    const finalProps = {
      ...buttonSizeProps,
      ...props,
    };

    const busyAttributes = {
      className: [busy && visiblyHiddenClass],
      'aria-hidden': busy || undefined,
      'aria-live': busy ? 'polite' : undefined,
    } as const;

    const autoButtonTypeVariant =
      'type' in props && props.type === 'submit' && !variant
        ? 'primary'
        : variant;

    const resolvedVariant = autoButtonTypeVariant || 'default';

    const hasStringChildren = isStringLike(children);

    return (
      <UnstyledButton
        ref={ref}
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        {...finalProps}
        className={[
          className,

          busy && busyButtonClass,
          inline && inlineBleedClass,

          // order is important here, as we want the state to override the variant
          state &&
            resolvedVariant &&
            buttonStateClassNames[resolvedVariant][state],

          resolvedVariant && buttonVariantClassNames[resolvedVariant],
        ]}
      >
        {iconStart && (
          <IconBox capSize={fontSize} icon={iconStart} {...busyAttributes} />
        )}

        {hasStringChildren && (
          <ExactText
            component="span"
            textAlign={textAlign}
            capSize={fontSize}
            {...busyAttributes}
          >
            {children}
          </ExactText>
        )}

        {!hasStringChildren && children && (
          <Box flexGrow component="span" {...busyAttributes}>
            {children}
          </Box>
        )}

        {busy && <Spinner className={busySpinnerClass} capSize={fontSize} />}

        {iconEnd && (
          <IconBox capSize={fontSize} icon={iconEnd} {...busyAttributes} />
        )}
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
