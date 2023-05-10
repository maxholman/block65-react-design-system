import { type ClassValue } from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  type ComponentProps,
  type FC,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import type { Falsy } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { defaultFormInputSpace, formInputProps } from './forms-common.js';
import {
  fieldLabelStyle,
  formInputCheckRadioLabel,
  formInputCheckRadioMessage,
  formInputCheckRadioWrapper,
  formInputCheckboxInput,
  formInputHack,
  formInputInnerClassName,
  formInputMessage,
  formInputNotCheckRadioClassName,
  formInputOuterClassName,
  formInputPasswordIcon,
  formInputPasswordToggleButton,
  formInputRadioInput,
  formInputSelect,
  formInputSelectWrapperMultiple,
  formInputSelectWrapperSingle,
  inputLabelStyle,
} from './forms.css.js';
import { useAutoFocus } from './hooks/use-auto-focus.js';
import { useCombinedRefs } from './hooks/use-combined-refs.js';
import { useCustomValidity } from './hooks/use-custom-validity.js';
import { useIdWithDefault } from './hooks/use-id-with-default.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { useToggle } from './hooks/use-toggle.js';
import { PasswordInvisibleIcon, PasswordVisibleIcon } from './icons.js';
import { Block, Inline, type BlockProps } from './layout.js';
import type { Tone } from './tone.css.js';
import type { Merge } from './types.js';
import { Secondary, Strong, Text } from './typography.js';
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
  messageTone?: Tone | Falsy;
  autoFocus?: boolean | 'force' | undefined;
  customValidity?: string;
};

export type FormInputProps = Merge<
  // InputHTMLAttributes<HTMLInputElement>,
  BoxBasedComponentProps<'input'>,
  CommonFormInputProps
>;

export const Form = forwardRef<
  HTMLFormElement,
  PropsWithChildren<BlockProps<'form'>>
>(({ space = '7', children, ...props }, ref) => (
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
));

export const FormInputLabel: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ className, secondary, tertiary, children, ...props }) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Inline>
      <Inline
        {...props}
        space="2"
        component="label"
        flexGrow
        className={[fieldLabelStyle, className]}
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

export const FormInputMessage: FC<
  Pick<FormInputProps, 'messageTone' | 'message'>
> = ({ message, messageTone }) => (
  <Text fontSize="0" tone={messageTone} className={formInputMessage}>
    {message}
  </Text>
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
      messageTone,
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
            htmlFor={id}
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
          rounded="medium"
          padding="5"
          className={[
            formInputOuterClassName,
            formInputInnerClassName,
            formInputNotCheckRadioClassName,
          ]}
          {...inputTypeProps}
          {...props}
          autoFocus={definitelyAutoFocus}
          id={id}
        />
        {message && (
          <FormInputMessage messageTone={messageTone} message={message} />
        )}
      </Block>
    );
  },
);

export const FormInputEmail = forwardRef<
  HTMLInputElement,
  Omit<FormInputProps, 'type'>
>((props, ref) => <FormInput ref={ref} type="email" {...props} />);

export const FormInputPassword = forwardRef<
  HTMLInputElement,
  Omit<FormInputProps, 'type'> & { behaviour?: 'toggle' | 'reveal' }
>(
  (
    {
      className,
      label,
      description,
      secondaryLabel,
      tertiaryLabel,
      message,
      messageTone,
      behaviour = 'toggle',
      autoFocus,
      customValidity,
      ...props
    },
    forwardedRef,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocus(autoFocus);

    const {
      borderTone,
      borderWidth,
      background,
      paddingInline,
      tone,
      ...inputTypeProps
    } = formInputProps({
      type: 'password',
      ...props,
    });

    const fakeInputProps = {
      borderTone,
      borderWidth,
      background,
      paddingInline,
      tone,
    };

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
      className: formInputPasswordIcon,
    };

    const ourRef = useCustomValidity<HTMLInputElement>(customValidity);
    const ref = useCombinedRefs(forwardedRef, ourRef);

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
          rounded="medium"
          className={[formInputOuterClassName, formInputNotCheckRadioClassName]}
          flexWrap="nowrap"
          alignItems={null}
          space="0"
          {...fakeInputProps}
        >
          <Box
            component="input"
            ref={ref}
            padding="5"
            type={visible ? 'text' : 'password'}
            rounded="medium"
            className={[
              formInputInnerClassName,
              formInputHack,
              formInputNotCheckRadioClassName,
            ]}
            autoFocus={definitelyAutoFocus}
            {...inputTypeProps}
            {...props}
            id={id}
          />

          <Block
            component="button"
            type="button"
            aria-pressed={visible}
            className={formInputPasswordToggleButton}
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

        {message && (
          <FormInputMessage messageTone={messageTone} message={message} />
        )}
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
  Merge<BoxBasedComponentProps<'select'>, FormSelectCommonProps>
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

  const inputTypeProps = formInputProps({});

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
            ? formInputSelectWrapperMultiple
            : formInputSelectWrapperSingle
        }
      >
        <Box
          component="select"
          rounded="medium"
          className={[formInputSelect, formInputNotCheckRadioClassName]}
          padding="5"
          id={id}
          ref={ref}
          {...inputTypeProps}
          {...props}
        />
      </div>
      {message &&
        (isStringLike(message) ? (
          <Text secondary fontSize="0">
            {message}
          </Text>
        ) : (
          message
        ))}
    </Block>
  );
};

const FormInputCheckRadio: FC<
  PropsWithChildren<
    Merge<
      BoxBasedComponentProps<'input'>,
      {
        label: ReactNode;
        className?: ClassValue;
        message?: ReactNode;
        type: 'radio' | 'checkbox';
        customValidity?: string | Falsy;
      }
    >
  >
> = ({ className, message, label, customValidity, ...props }) => {
  const id = useIdWithDefault(props.id);
  const isStringLike = useStringLikeDetector();

  const ref = useCustomValidity<HTMLInputElement>(customValidity);

  const inputTypeProps = formInputProps(props);

  return (
    <Block space="3" className={formInputCheckRadioWrapper}>
      <Box
        component="input"
        rounded="small"
        ref={ref}
        className={[
          className,
          props.type === 'radio' ? formInputRadioInput : formInputCheckboxInput,
        ]}
        {...inputTypeProps}
        {...props}
        id={id}
      />
      {label &&
        (isStringLike(label) ? (
          <Text
            component="label"
            className={[inputLabelStyle, formInputCheckRadioLabel]}
            secondary={!!props.disabled}
            htmlFor={id}
          >
            {label}
          </Text>
        ) : (
          <Box className={formInputCheckRadioLabel}>{label}</Box>
        ))}
      {message &&
        (isStringLike(message) ? (
          <Text secondary fontSize="0" className={formInputCheckRadioMessage}>
            {message}
          </Text>
        ) : (
          <Box className={formInputCheckRadioLabel}>{message}</Box>
        ))}
    </Block>
  );
};

export const FormInputRadio: FC<
  Omit<ComponentProps<typeof FormInputCheckRadio>, 'type'>
> = (props) => <FormInputCheckRadio type="radio" {...props} />;

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
          <Text secondary fontSize="0">
            {message}
          </Text>
        ) : (
          message
        ))}
    </Block>
  );
};

export const FormInputCheckbox: FC<
  Omit<ComponentProps<typeof FormInputCheckRadio>, 'type'>
> = (props) => <FormInputCheckRadio type="checkbox" {...props} />;

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
          <Text secondary fontSize="0">
            {message}
          </Text>
        ) : (
          message
        ))}
    </Block>
  );
};

export type FormTextAreaProps = Merge<
  BoxBasedComponentProps<'textarea'>,
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
      messageTone,
      rounded = 'medium',
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
            formInputInnerClassName,
            formInputOuterClassName,
            formInputNotCheckRadioClassName,
          ]}
          {...inputTypeProps}
          {...props}
          id={id}
        />
        {message && (
          <Inline>
            <Text fontSize="0" tone={messageTone}>
              {messageTone ? message : <Secondary>{message}</Secondary>}
            </Text>
          </Inline>
        )}
      </Block>
    );
  },
);
