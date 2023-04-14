import { clsx, type ClassValue } from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  type ComponentProps,
  type FC,
  type ForwardedRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type MutableRefObject,
  type PropsWithChildren,
  type ReactNode,
  type RefCallback,
} from 'react';
import type { Falsy, Space } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import {
  fieldLabelStyle,
  formInputCheckRadioLabel,
  formInputCheckRadioMessage,
  formInputCheckRadioWrapper,
  formInputCheckboxInput,
  formInputInnerClassName,
  formInputNotCheckRadioClassName,
  formInputOuterClassName,
  formInputPassword,
  formInputPasswordIcon,
  formInputPasswordToggleButton,
  formInputRadioInput,
  formInputSelect,
  formInputSelectWrapperMultiple,
  formInputSelectWrapperSingle,
  inputLabelStyle,
} from './forms.css.js';
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
import { useAutoFocusIfAppropriate } from './hooks/use-auto-focus-if-appropriate.js';

const defaultFormInputSpace: Space = '3';

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
};

export type FormInputProps = Merge<
  // InputHTMLAttributes<HTMLInputElement>,
  BoxBasedComponentProps<'input'>,
  CommonFormInputProps
>;

function formInputProps(
  props: InputHTMLAttributes<HTMLInputElement>,
): Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>> {
  const common = {
    ...(props.readOnly && { tabIndex: -1 }),
  };

  switch (props.type) {
    case 'email':
      return {
        ...common,
        autoComplete: 'email',
        minLength: 6,
        maxLength: 320,
        pattern: '^[^@]+@[^@]+.[^@]+$',
        placeholder: 'email@example.com',
      };
    default: {
      return {
        ...common,
      };
    }
  }
}

export const Form = forwardRef<
  HTMLFormElement,
  PropsWithChildren<BlockProps<'form'>>
>(({ space = '6', children, ...props }, ref) => (
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

const FormInputMessage: FC<Pick<FormInputProps, 'messageTone' | 'message'>> = ({
  message,
  messageTone,
}) => {
  return (
    <Inline>
      <Text fontSize="0" tone={messageTone}>
        {/* {messageTone ? <Secondary>{message}</Secondary> : message} */}
        {message}
      </Text>
    </Inline>
  );
};

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
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocusIfAppropriate(autoFocus);

    const inputTypeProps = formInputProps(props);

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
>((props, ref) => {
  return (
    <FormInput
      ref={ref}
      type="email"
      placeholder="test@example.com"
      pattern="^[^@]+@[^@]+.[^@]+$"
      {...props}
    />
  );
});

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
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocusIfAppropriate(autoFocus);

    const inputTypeProps = formInputProps(props);

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
        >
          <Box
            component="input"
            ref={ref}
            type={visible ? 'text' : 'password'}
            className={[formInputInnerClassName, formInputPassword]}
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
            paddingInline="4"
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
  rounded = 'medium',
  ...props
}) => {
  const id = useIdWithDefault(props.id);
  const isStringLike = useStringLikeDetector();

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
          rounded={rounded}
          className={clsx(formInputSelect, formInputNotCheckRadioClassName)}
          id={id}
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
      }
    >
  >
> = ({ className, message, label, ...props }) => {
  const id = useIdWithDefault(props.id);
  const isStringLike = useStringLikeDetector();

  return (
    <Block space="3" className={formInputCheckRadioWrapper}>
      <Box
        component="input"
        rounded="small"
        className={[
          className,
          props.type === 'radio' ? formInputRadioInput : formInputCheckboxInput,
        ]}
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

function useCombinedRefs<T>(
  ...refs: (RefCallback<T> | MutableRefObject<T> | ForwardedRef<T>)[]
): RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}

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
    const definitelyAutoFocus = useAutoFocusIfAppropriate(autoFocus);

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
          className={clsx(
            formInputInnerClassName,
            formInputOuterClassName,
            formInputNotCheckRadioClassName,
          )}
          {...(props.readOnly && { tabIndex: -1 })}
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
