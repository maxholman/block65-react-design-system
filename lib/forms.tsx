import { ClassValue, clsx } from 'clsx';
import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  InputHTMLAttributes,
  isValidElement,
  LabelHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SelectHTMLAttributes,
  useId,
} from 'react';
import {
  fieldLabelStyle,
  fieldLabelTertiaryStyle,
  fieldLabelWrapperStyle,
  formInput,
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
import { Block, BlockProps, Inline } from './layout.js';
import type { Tone } from './schemes/color.css.js';
import type { Merge } from './types.js';
import { Secondary, Strong, Text } from './typography.js';
import {
  cloneElementIfValidElementOfType,
  isValidElementOfType,
} from './utils.js';

export const Form: FC<PropsWithChildren<BlockProps<'form'>>> = ({
  space = 'large',
  children,
  ...props
}) => (
  <Block space={space} component="form" {...props}>
    {Children.map(children, (child) => {
      // if it's a block element and no space is defined, use the space this
      // component has been given
      if (isValidElementOfType(child, Block) && !child.props.space) {
        return cloneElement(child, { ...child.props, space });
      }
      return child;
    })}
  </Block>
);

export const FormFieldLabel: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ className, secondary, tertiary, children, ...props }) => (
  <Inline className={fieldLabelWrapperStyle}>
    <Inline
      {...props}
      space="tiny"
      component="label"
      className={[fieldLabelStyle, className]}
    >
      {isValidElement(children) ? (
        children
      ) : (
        <Text>
          <Strong>{children}</Strong>
          {secondary && (
            <>
              {' '}
              <Secondary>{secondary}</Secondary>
            </>
          )}
        </Text>
      )}
    </Inline>
    {tertiary && (
      <Inline className={fieldLabelTertiaryStyle}>{tertiary}</Inline>
    )}
  </Inline>
);

export const FormInputLabel: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
  }
> = ({ className, children, ...props }) => (
  <Inline {...props} component="label" className={[inputLabelStyle, className]}>
    {isValidElement(children) ? children : <Text>{children}</Text>}
  </Inline>
);

function formInputProps(
  type: ComponentProps<typeof FormInput>['type'],
): Partial<InputHTMLAttributes<HTMLInputElement>> | void {
  switch (type) {
    case 'email':
      return {
        autoComplete: 'email',
        minLength: 6,
        maxLength: 320,
        pattern: '^[^@]+@[^@]+.[^@]+$',
        placeholder: 'email@example.com',
      };
    case 'password':
      return {
        type,
        className: formInput,
      };
    default: {
      return {};
    }
  }
}

export const FormInput: FC<
  PropsWithChildren<
    InputHTMLAttributes<HTMLInputElement> & {
      type: Omit<
        InputHTMLAttributes<HTMLInputElement>['type'],
        'radio' | 'checkbox'
      >;
      className?: ClassValue;
      label: ReactNode;
      description?: ReactNode;
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: string;
      messageTone?: Tone;
    }
  >
> = ({
  className,
  label,
  description,
  secondaryLabel,
  tertiaryLabel,
  message,
  messageTone,
  ...props
}) => {
  const id = useId();

  const inputTypeProps = formInputProps(props.type);

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
        className={clsx(formInput, formInputNotCheckRadio)}
        id={id}
        {...inputTypeProps}
        {...props}
      />
      {message && (
        <Text size="small" tone={messageTone}>
          {messageTone ? message : <Secondary>{message}</Secondary>}
        </Text>
      )}
    </Block>
  );
};

export const FormSelect: FC<
  PropsWithChildren<
    SelectHTMLAttributes<HTMLSelectElement> & {
      className?: ClassValue;
      label: ReactNode;
      description?: ReactNode;
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  className,
  label,
  description,
  secondaryLabel,
  tertiaryLabel,
  message,
  ...props
}) => {
  const id = useId();

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
      {message}
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
  const id = useId();

  return (
    <Block space="small" className={formInputCheckRadioWrapper}>
      <input
        id={id}
        className={
          props.type === 'radio' ? formInputRadioInput : formInputCheckboxInput
        }
        {...props}
      />
      <FormInputLabel className={formInputCheckRadioLabel} htmlFor={id}>
        {label}
      </FormInputLabel>
      {message && (
        <Text size="small">
          <Secondary className={formInputCheckRadioMessage}>
            {message}
          </Secondary>
        </Text>
      )}
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
  // ...props
}) => (
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
    {message && <Text size="small">{message}</Text>}
  </Block>
);

export const FormInputCheckbox: FC<
  Omit<ComponentProps<typeof FormInputCheckRadio>, 'type'>
> = (props) => <FormInputCheckRadio type="checkbox" {...props} />;

export const FormInputCheckboxGroup: FC<
  PropsWithChildren<
    InputHTMLAttributes<HTMLInputElement> & {
      name: string; // required
      className?: ClassValue;
      label: ReactNode;
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
  // ...props
}) => (
  <Block className={className}>
    <FormFieldLabel secondary={secondaryLabel} tertiary={tertiaryLabel}>
      {label}
    </FormFieldLabel>
    {Children.map(children, (child) =>
      cloneElementIfValidElementOfType(child, FormInputCheckbox, {
        name,
      }),
    )}
    {message && <Text size="small">{message}</Text>}
  </Block>
);
