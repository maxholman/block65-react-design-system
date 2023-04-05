import { clsx, type ClassValue } from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  type ComponentProps,
  type FC,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import type { Space } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import {
  fieldLabelStyle,
  fieldLabelWrapperStyle,
  formInputCheckboxInput,
  formInputCheckRadioLabel,
  formInputCheckRadioMessage,
  formInputCheckRadioWrapper,
  formInputClassName,
  formInputNotCheckRadio,
  formInputRadioInput,
  formInputSelect,
  formInputSelectWrapperMultiple,
  formInputSelectWrapperSingle,
  inputLabelStyle,
} from './forms.css.js';
import { useIdWithDefault } from './hooks/use-id-with-default.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Block, Inline, type BlockProps } from './layout.js';
import type { Tone } from './tone.css.js';
import type { Merge } from './types.js';
import { Secondary, Strong, Text } from './typography.js';
import {
  cloneElementIfValidElementOfType,
  isValidElementOfType,
} from './utils.js';

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
  messageTone?: Tone;
};

export type FormInputProps = Merge<
  // InputHTMLAttributes<HTMLInputElement>,
  BoxBasedComponentProps<'input'>,
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
>(({ space = '5', children, ...props }, ref) => (
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
        space="2"
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
      {tertiary && <Inline>{tertiary}</Inline>}
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
      rounded = 'medium',
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);

    const inputTypeProps = formInputProps(props);

    return (
      <Block className={className} space={defaultFormInputSpace}>
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
        <Box
          ref={ref}
          component="input"
          rounded={rounded}
          className={[formInputClassName, formInputNotCheckRadio]}
          {...(props.readOnly && { tabIndex: -1 })}
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
        <Box
          component="select"
          rounded={rounded}
          className={clsx(formInputSelect, formInputNotCheckRadio)}
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
          <Text secondary fontSize="0" className={formInputCheckRadioMessage}>
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
      ...props
    },
    ref,
  ) => {
    const id = useIdWithDefault(props.id);

    return (
      <Block className={className} space={defaultFormInputSpace}>
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
        <Box
          rounded={rounded}
          component="textarea"
          ref={ref}
          className={clsx(formInputClassName, formInputNotCheckRadio)}
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
