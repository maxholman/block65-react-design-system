import type { ClassValue } from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  type FC,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import styles from './forms.module.scss';
import type { Falsy } from './box.css.js';
import { Box, type BoxProps } from './box.js';
import {
  defaultFormInputSpace,
  formInputBoxProps,
  formInputElProps,
  formInputProps,
} from './forms-common.js';
import { useAutoFocus } from './hooks/use-auto-focus.js';
import { useCombinedRefs } from './hooks/use-combined-refs.js';
import { useCustomValidity } from './hooks/use-custom-validity.js';
import { useIdWithDefault } from './hooks/use-id-with-default.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { useToggle } from './hooks/use-toggle.js';
import { PasswordInvisibleIcon, PasswordVisibleIcon } from './icons.js';
import { Block, Inline, type BlockProps } from './layout.js';
import type { Merge } from './types.js';
import { Secondary, Strong, ExactText } from './typography.js';
import {
  cloneElementIfValidElementOfType,
  isValidElementOfType,
} from './utils.js';

type CommonFormInputProps = {
  type?: Exclude<
    InputHTMLAttributes<HTMLInputElement>['type'],
    'radio' | 'checkbox'
  >;
  className?: ClassValue;
  label?: ReactNode;
  description?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  message?: ReactNode;
  autoFocus?: boolean | 'force' | undefined;
  customValidity?: string;
};

export type FormInputProps = Merge<
  // InputHTMLAttributes<HTMLInputElement>,
  BoxProps<'input'>,
  CommonFormInputProps
>;

export type FormProps = BlockProps<'form'>;

export const Form = forwardRef<HTMLFormElement, PropsWithChildren<FormProps>>(
  ({ space = '9', children, ...props }, ref) => (
    <Block space={space} component="form" {...props} ref={ref}>
      {Children.map(children, (child) => {
        // if it's a block element and no space is defined, use the space this
        // component has been given
        if (isValidElementOfType(child, Block) && !child.props.space) {
          return cloneElement(child, { ...child.props, space });
        }
        return child;
      })}
    </Block>
  ),
);

export const FormInputLabel: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ secondary, tertiary, children, ...props }) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Inline>
      <Inline
        {...props}
        space="2"
        component="label"
        flexGrow
        alignItems="center"
      >
        {isStringLike(children) ? (
          <>
            <Strong>{children}</Strong>
            {secondary && <Secondary>{secondary}</Secondary>}
          </>
        ) : (
          children
        )}
      </Inline>
      {tertiary && <Inline>{tertiary}</Inline>}
    </Inline>
  );
};

export const FormInputMessage: FC<Pick<FormInputProps, 'message'>> = ({
  message,
}) => (
  <ExactText secondary fontSize="0">
    {message}
  </ExactText>
);

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      className,
      label,
      description,
      secondaryLabel,
      tertiaryLabel,
      message,
      autoFocus,
      customValidity,
      ...props
    },
    forwardedRef,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocus(autoFocus);

    const inputTypeProps = formInputProps(props);

    const ourRef = useCustomValidity<HTMLInputElement>(customValidity);
    const ref = useCombinedRefs(forwardedRef, ourRef);

    return (
      <Block className={className} space={defaultFormInputSpace}>
        {label && (
          <FormInputLabel
            htmlFor={!inputTypeProps.readOnly ? id : undefined}
            secondary={secondaryLabel}
            tertiary={tertiaryLabel}
          >
            {label}
          </FormInputLabel>
        )}
        {description}
        <Box
          ref={ref}
          component="input"
          padding="5"
          className={[
            styles.formInputOuterClassName,
            styles.formInputInnerClassName,
            !inputTypeProps.readOnly &&
              styles.formInputFocusNotCheckRadioClassName,
          ]}
          {...inputTypeProps}
          autoFocus={definitelyAutoFocus}
          id={id}
        />
        {message && <FormInputMessage message={message} />}
      </Block>
    );
  },
);

export type FormInputPropsNoType = Omit<FormInputProps, 'type'>;

export const FormInputEmail = forwardRef<
  HTMLInputElement,
  FormInputPropsNoType
>((props, ref) => <FormInput ref={ref} type="email" {...props} />);

export const FormInputPassword = forwardRef<
  HTMLInputElement,
  FormInputPropsNoType & { behaviour?: 'toggle' | 'reveal' }
>(
  (
    {
      className,
      label,
      description,
      secondaryLabel,
      tertiaryLabel,
      message,

      behaviour = 'toggle',
      autoFocus,
      customValidity,
      ...props
    },
    forwardedRef,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocus(autoFocus);

    const propsWithElType = {
      type: 'password',
      ...props,
    };

    const inputElProps = formInputElProps(propsWithElType);
    const inputBoxProps = formInputBoxProps(propsWithElType);

    const [visible, toggleVisible] = useToggle();

    const behaviourProps =
      behaviour === 'reveal'
        ? {
            onMouseDown: () => toggleVisible(true),
            onMouseUp: () => toggleVisible(false),
          }
        : {
            onClick: () => toggleVisible(),
          };

    const iconProps = {
      className: styles.formInputPasswordIcon,
    };

    const ourRef = useCustomValidity<HTMLInputElement>(customValidity);
    const ref = useCombinedRefs(forwardedRef, ourRef);

    const isStringLike = useStringLikeDetector();

    return (
      <Block className={className} space={defaultFormInputSpace}>
        {label && (
          <FormInputLabel
            htmlFor={id}
            secondary={secondaryLabel}
            tertiary={tertiaryLabel}
          >
            {label}
          </FormInputLabel>
        )}
        {description}

        <Inline
          className={[
            styles.formInputOuterClassName,
            styles.formInputFocusNotCheckRadioClassName,
          ]}
          flexWrap="nowrap"
          alignItems={null}
          space="0"
          {...inputBoxProps}
        >
          <Box
            component="input"
            ref={ref}
            padding="5"
            type={visible ? 'text' : 'password'}
            className={[
              styles.formInputInnerClassName,
              styles.formInputHack,
              styles.formInputFocusNotCheckRadioClassName,
            ]}
            autoFocus={definitelyAutoFocus}
            {...inputElProps}
            {...props}
            id={id}
          />

          <Block
            component="button"
            type="button"
            aria-pressed={visible}
            className={styles.formInputPasswordToggleButton}
            paddingInline="5"
            alignItems="center"
            justifyContent="center"
            {...behaviourProps}
          >
            {visible ? (
              <PasswordVisibleIcon {...iconProps} />
            ) : (
              <PasswordInvisibleIcon {...iconProps} />
            )}
          </Block>
        </Inline>

        {message &&
          (isStringLike(message) ? (
            <FormInputMessage message={message} />
          ) : (
            message
          ))}
      </Block>
    );
  },
);

type FormSelectCommonProps = {
  className?: ClassValue;
  label: ReactNode;
  description?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  message?: ReactNode;
  customValidity?: string | Falsy;
};

export type FormSelectProps = PropsWithChildren<
  Merge<BoxProps<'select'>, FormSelectCommonProps>
>;

export const FormSelect: FC<FormSelectProps> = ({
  className,
  label,
  description,
  secondaryLabel,
  tertiaryLabel,
  message,
  customValidity,
  ...props
}) => {
  const id = useIdWithDefault(props.id);
  const isStringLike = useStringLikeDetector();

  const inputTypeProps = formInputProps();

  const ref = useCustomValidity<HTMLSelectElement>(customValidity);

  return (
    <Block className={className} space={defaultFormInputSpace}>
      <FormInputLabel
        htmlFor={id}
        secondary={secondaryLabel}
        tertiary={tertiaryLabel}
      >
        {label}
      </FormInputLabel>
      {description}
      <div
        className={
          props.multiple
            ? styles.formInputSelectWrapperMultiple
            : styles.formInputSelectWrapperSingle
        }
      >
        <Box
          component="select"
          className={[
            styles.formInputSelect,
            styles.formInputFocusNotCheckRadioClassName,
          ]}
          padding="5"
          id={id}
          ref={ref}
          {...inputTypeProps}
          {...props}
        />
      </div>
      {message &&
        (isStringLike(message) ? (
          <FormInputMessage message={message} />
        ) : (
          message
        ))}
    </Block>
  );
};

type FormInputCheckRadioProps<
  T extends 'radio' | 'checkbox' = 'radio' | 'checkbox',
> = Merge<
  BoxProps<'input'>,
  {
    label: ReactNode;
    className?: ClassValue;
    message?: ReactNode;
    type?: T;
    customValidity?: string | Falsy;
  }
>;

const FormInputCheckRadio: FC<
  Merge<BoxProps<'input'>, FormInputCheckRadioProps>
> = ({ className, message, label, customValidity, ...props }) => {
  const id = useIdWithDefault(props.id);
  const isStringLike = useStringLikeDetector();

  const ref = useCustomValidity<HTMLInputElement>(customValidity);

  const inputTypeProps = formInputProps(props);

  return (
    <Box space="3" className={styles.formInputCheckRadioWrapper}>
      <Box
        component="input"
        rounded="1"
        ref={ref}
        className={[
          className,
          props.type === 'radio'
            ? styles.formInputRadioInput
            : styles.formInputCheckboxInput,
        ]}
        {...inputTypeProps}
        {...props}
        id={id}
      />
      {label &&
        (isStringLike(label) ? (
          <ExactText
            component="label"
            className={[
              styles.inputLabelStyle,
              styles.formInputCheckRadioLabel,
            ]}
            secondary={!!props.disabled}
            htmlFor={id}
          >
            {label}
          </ExactText>
        ) : (
          <Box className={styles.formInputCheckRadioLabel}>{label}</Box>
        ))}
      {message &&
        (isStringLike(message) ? (
          <ExactText
            secondary
            fontSize="0"
            className={styles.formInputCheckRadioMessage}
          >
            {message}
          </ExactText>
        ) : (
          <Box className={styles.formInputCheckRadioLabel}>{message}</Box>
        ))}
    </Box>
  );
};

export const FormInputRadio: FC<FormInputCheckRadioProps<'radio'>> = (
  props,
) => <FormInputCheckRadio type="radio" {...props} />;

export const FormInputRadioGroup: FC<
  PropsWithChildren<
    InputHTMLAttributes<HTMLInputElement> & {
      name: string; // required
      className?: ClassValue;
      label?: ReactNode; // optional as the label could actually be pictorial
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  className,
  name,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  children,
}) => {
  const isStringLike = useStringLikeDetector();
  return (
    <Block className={className}>
      {label && (
        <FormInputLabel secondary={secondaryLabel} tertiary={tertiaryLabel}>
          {label}
        </FormInputLabel>
      )}
      {Children.map(children, (child) =>
        cloneElementIfValidElementOfType(child, FormInputRadio, {
          name,
        }),
      )}
      {message &&
        (isStringLike(message) ? (
          <ExactText secondary fontSize="0">
            {message}
          </ExactText>
        ) : (
          message
        ))}
    </Block>
  );
};

export const FormInputCheckbox: FC<FormInputCheckRadioProps<'checkbox'>> = (
  props,
) => <FormInputCheckRadio type="checkbox" {...props} />;

export const FormInputCheckboxGroup: FC<
  PropsWithChildren<
    InputHTMLAttributes<HTMLInputElement> & {
      name: string; // required
      className?: ClassValue;
      label?: ReactNode;
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  className,
  name,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  children,
}) => {
  const isStringLike = useStringLikeDetector();
  return (
    <Block className={className}>
      {label && (
        <FormInputLabel secondary={secondaryLabel} tertiary={tertiaryLabel}>
          {label}
        </FormInputLabel>
      )}
      {Children.map(children, (child) =>
        cloneElementIfValidElementOfType(child, FormInputCheckbox, {
          name,
        }),
      )}
      {message &&
        (isStringLike(message) ? (
          <ExactText secondary fontSize="0">
            {message}
          </ExactText>
        ) : (
          message
        ))}
    </Block>
  );
};

export type FormTextAreaProps = Merge<
  BoxProps<'textarea'>,
  CommonFormInputProps
>;

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {
      className,
      label,
      description,
      secondaryLabel,
      tertiaryLabel,
      message,
      rounded = '2',
      autoFocus,
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocus(autoFocus);

    const inputTypeProps = formInputProps({
      ...props,
      type: 'text',
    });

    const internalRef = useRef<HTMLTextAreaElement>(null);
    const combinedRef = useCombinedRefs(ref, internalRef);

    // submit the form on Ctrl+Enter inside the textarea
    useEffect(() => {
      const el = internalRef.current;
      if (el && el.form) {
        const { form } = el;
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            // safari 15.4 compat
            if (form.requestSubmit) {
              form.requestSubmit();
            } else {
              form?.dispatchEvent(new SubmitEvent('submit'));
            }
          }
        };

        el.addEventListener('keydown', handleKeyDown);
        return () => {
          el.removeEventListener('keydown', handleKeyDown);
        };
      }

      return () => {};
    }, [ref]);

    return (
      <Block className={className} space={defaultFormInputSpace}>
        {label && (
          <FormInputLabel
            htmlFor={id}
            secondary={secondaryLabel}
            tertiary={tertiaryLabel}
          >
            {label}
          </FormInputLabel>
        )}
        {description}
        <Box
          rounded={rounded}
          component="textarea"
          autoFocus={definitelyAutoFocus}
          ref={combinedRef}
          padding="5"
          className={[
            styles.formInputInnerClassName,
            styles.formInputOuterClassName,
            styles.formInputFocusNotCheckRadioClassName,
          ]}
          {...inputTypeProps}
          {...props}
          id={id}
        />
        {message && (
          <Inline>
            <ExactText fontSize="0">
              <Secondary>{message}</Secondary>
            </ExactText>
          </Inline>
        )}
      </Block>
    );
  },
);
