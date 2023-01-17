import { ClassValue, clsx } from 'clsx';
import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { useStringLikeDetector } from './context.js';
import {
  fieldLabelStyle,
  fieldLabelTertiaryStyle,
  fieldLabelWrapperStyle,
  formInputClassName,
  formInputCheckboxInput,
  formInputCheckRadioLabel,
  formInputCheckRadioMessage,
  formInputCheckRadioWrapper,
  formInputNotCheckRadio,
  formInputRadioInput,
  formInputSelect,
  formInputSelectWrapperMultiple,
  formInputSelectWrapperSingle,
  inputLabelStyle,
} from './forms.css.js';
import { useIdWithDefault } from './hooks/use-id-with-default.js';
import { Block, BlockProps, Inline } from './layout.js';
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
  messageTone?: Tone;
};

export type FormInputProps = Merge<
  InputHTMLAttributes<HTMLInputElement>,
  CommonFormInputProps
>;

function formInputProps(
  props: InputHTMLAttributes<HTMLInputElement>,
): Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>> {
  switch (props.type) {
    case 'email':
      return {
        autoComplete: 'email',
        minLength: 6,
        maxLength: 320,
        pattern: '^[^@]+@[^@]+.[^@]+$',
        placeholder: 'email@example.com',
      };
    default: {
      return {};
    }
  }
}

export const Form = forwardRef<
  HTMLFormElement,
  PropsWithChildren<BlockProps<'form'>>
>(({ space = 'large', children, ...props }, ref) => (
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

export const FormFieldLabel: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ className, secondary, tertiary, children, ...props }) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Inline className={fieldLabelWrapperStyle}>
      <Inline
        {...props}
        space="tiny"
        component="label"
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
      {tertiary && (
        <Inline className={fieldLabelTertiaryStyle}>{tertiary}</Inline>
      )}
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
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);

    const inputTypeProps = formInputProps(props);

    return (
      <Block className={className} space="small">
        {label && (
          <FormFieldLabel
            htmlFor={id}
            secondary={secondaryLabel}
            tertiary={tertiaryLabel}
          >
            {label}
          </FormFieldLabel>
        )}
        {description}
        <input
          ref={ref}
          className={clsx(formInputClassName, formInputNotCheckRadio)}
          {...(props.readOnly && { tabIndex: -1 })}
          {...inputTypeProps}
          {...props}
          id={id}
        />
        {message && (
          <Inline>
            <Text size="small" tone={messageTone}>
              {messageTone ? message : <Secondary>{message}</Secondary>}
            </Text>
          </Inline>
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
  SelectHTMLAttributes<HTMLSelectElement> & FormSelectCommonProps
>;

export const FormSelect: FC<FormSelectProps> = ({
  className,
  label,
  description,
  secondaryLabel,
  tertiaryLabel,
  message,
  ...props
}) => {
  const id = useIdWithDefault(props.id);
  const isStringLike = useStringLikeDetector();

  return (
    <Block className={className} space="small">
      <FormFieldLabel
        htmlFor={id}
        secondary={secondaryLabel}
        tertiary={tertiaryLabel}
      >
        {label}
      </FormFieldLabel>
      {description}
      <div
        className={
          props.multiple
            ? formInputSelectWrapperMultiple
            : formInputSelectWrapperSingle
        }
      >
        <select
          className={clsx(formInputSelect, formInputNotCheckRadio)}
          id={id}
          {...props}
        />
      </div>
      {message &&
        (isStringLike(message) ? (
          <Text secondary size="small">
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
      InputHTMLAttributes<HTMLInputElement>,
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
    <Block space="small" className={formInputCheckRadioWrapper}>
      <input
        className={clsx(
          props.type === 'radio' ? formInputRadioInput : formInputCheckboxInput,
          className,
        )}
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
          <div className={formInputCheckRadioLabel}>{message}</div>
        ))}
      {message &&
        (isStringLike(message) ? (
          <Text secondary size="small" className={formInputCheckRadioMessage}>
            {message}
          </Text>
        ) : (
          message
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
        <FormFieldLabel secondary={secondaryLabel} tertiary={tertiaryLabel}>
          {label}
        </FormFieldLabel>
      )}
      {Children.map(children, (child) =>
        cloneElementIfValidElementOfType(child, FormInputRadio, {
          name,
        }),
      )}
      {message &&
        (isStringLike(message) ? (
          <Text secondary size="small">
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
        <FormFieldLabel secondary={secondaryLabel} tertiary={tertiaryLabel}>
          {label}
        </FormFieldLabel>
      )}
      {Children.map(children, (child) =>
        cloneElementIfValidElementOfType(child, FormInputCheckbox, {
          name,
        }),
      )}
      {message &&
        (isStringLike(message) ? (
          <Text secondary size="small">
            {message}
          </Text>
        ) : (
          message
        ))}
    </Block>
  );
};

export type FormTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  CommonFormInputProps;

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
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);

    return (
      <Block className={className} space="small">
        {label && (
          <FormFieldLabel
            htmlFor={id}
            secondary={secondaryLabel}
            tertiary={tertiaryLabel}
          >
            {label}
          </FormFieldLabel>
        )}
        {description}
        <textarea
          ref={ref}
          className={clsx(formInputClassName, formInputNotCheckRadio)}
          {...(props.readOnly && { tabIndex: -1 })}
          {...props}
          id={id}
        />
        {message && (
          <Inline>
            <Text size="small" tone={messageTone}>
              {messageTone ? message : <Secondary>{message}</Secondary>}
            </Text>
          </Inline>
        )}
      </Block>
    );
  },
);
