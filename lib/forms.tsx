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
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
  useId,
} from 'react';
import {
  formInput,
  formInputCheckbox,
  formInputRadio,
  formInputSelect,
  formInputSelectWrapper,
  inputLabelStyle,
  fieldLabelStyle as fieldLabelStyle,
  fieldLabelTertiaryStyle,
} from './forms.css.js';
import { Block, Inline } from './layout.js';
import type { Space, Tone } from './global-theme.css.js';
import { Secondary, Strong, Text } from './typography.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isValidElementOfType<T extends FC<any>>(
  child: ReactNode,
  type: T,
): child is ReactElement<ComponentProps<T>> {
  return isValidElement(child) && child.type === type;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cloneElementIfValidElementOfType<T extends FC<any>>(
  child: ReactNode,
  type: T,
  props: Partial<ComponentProps<T>>,
): typeof child {
  return isValidElementOfType(child, type) ? cloneElement(child, props) : child;
}

export const Form: FC<
  PropsWithChildren<{ className?: ClassValue; space: Space }>
> = ({ className, space, children, ...props }) => (
  <Block space={space} component="form" className={clsx(className)} {...props}>
    {Children.map(children, (child) => {
      // if it's a block element and no space is defined, used the space this component has
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
  <Inline
    space="tiny"
    {...props}
    component="label"
    className={[fieldLabelStyle, className]}
  >
    <Text>
      <Strong>{children}</Strong>
      {secondary && (
        <>
          {' '}
          <Secondary>{secondary}</Secondary>
        </>
      )}
    </Text>
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
  <Inline {...props} component="label" className={[className, inputLabelStyle]}>
    <Text>{children}</Text>
  </Inline>
);

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
      <input className={formInput} id={id} {...props} />
      {message && (
        <Text size="small" tone={messageTone}>
          <Secondary>{message}</Secondary>
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
      <div className={formInputSelectWrapper}>
        <select className={formInputSelect} id={id} {...props} />
      </div>
      {message}
    </Block>
  );
};

export const FormInputRadio: FC<
  PropsWithChildren<
    Omit<
      InputHTMLAttributes<HTMLInputElement> & {
        label: ReactNode;
        className?: ClassValue;
        message?: ReactNode;
      },
      'type'
    >
  >
> = ({ className, message, label, ...props }) => {
  const id = useId();

  return (
    <Inline space="small" className={className}>
      <input className={formInputRadio} type="radio" id={id} {...props} />
      <Block space="small">
        <Inline>
          <FormInputLabel htmlFor={id}>{label}</FormInputLabel>
        </Inline>
        <Text size="small">{message}</Text>
      </Block>
    </Inline>
  );
};

export const FormInputRadioGroup: FC<
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
      cloneElementIfValidElementOfType(child, FormInputRadio, {
        name,
      }),
    )}
    {message && <Text size="small">{message}</Text>}
  </Block>
);

export const FormInputCheckbox: FC<
  PropsWithChildren<
    Omit<
      InputHTMLAttributes<HTMLInputElement> & {
        label: ReactNode;
        className?: ClassValue;
        message?: ReactNode;
      },
      'type'
    >
  >
> = ({ className, message, label, ...props }) => {
  const id = useId();

  return (
    <Inline space="small" className={className}>
      <input className={formInputCheckbox} type="checkbox" id={id} {...props} />
      <Block space="small">
        <FormInputLabel htmlFor={id}>{label}</FormInputLabel>
        <Text size="small">{message}</Text>
      </Block>
    </Inline>
  );
};

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
