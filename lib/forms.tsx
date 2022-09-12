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
  labelStyle,
} from './forms.css.js';
import { Block, Inline } from './layout.js';
import type { Space } from './themes.css.js';
import { Secondary, Text } from './typography.js';

function isValidElementOfType<T extends FC<any>>(
  child: ReactNode,
  type: T,
): child is ReactElement<ComponentProps<T>> {
  return isValidElement(child) && child.type === type;
}

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

export const Label: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ className, secondary, tertiary, children, ...props }) => (
  <Inline
    space="standard"
    {...props}
    component="label"
    className={clsx(className, labelStyle)}
  >
    <Text>{children}</Text>
    {secondary && <Secondary>{secondary}</Secondary>}
    {tertiary && <Text>{tertiary}</Text>}
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
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  className,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  ...props
}) => {
  const id = useId();

  return (
    <Block className={className}>
      <Label htmlFor={id} secondary={secondaryLabel} tertiary={tertiaryLabel}>
        {label}
      </Label>
      <input className={formInput} id={id} {...props} />
      {message && <Secondary size="small">{message}</Secondary>}
    </Block>
  );
};

export const FormSelect: FC<
  PropsWithChildren<
    SelectHTMLAttributes<HTMLSelectElement> & {
      className?: ClassValue;
      label: ReactNode;
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  className,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  ...props
}) => {
  const id = useId();

  return (
    <Block className={className}>
      <Label htmlFor={id} secondary={secondaryLabel} tertiary={tertiaryLabel}>
        {label}
      </Label>
      <div className={formInputSelectWrapper}>
        <select className={formInputSelect} id={id} {...props} />
      </div>
      {message && <Text size="small">{message}</Text>}
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
          <Label htmlFor={id}>{label}</Label>
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
    <Label secondary={secondaryLabel} tertiary={tertiaryLabel}>
      {label}
    </Label>
    {Children.map(children, (child) =>
      cloneElementIfValidElementOfType(child, FormInputRadio, {
        name,
      }),
    )}{' '}
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
        <Label htmlFor={id}>{label}</Label>
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
    <Label secondary={secondaryLabel} tertiary={tertiaryLabel}>
      {label}
    </Label>
    {Children.map(children, (child) =>
      cloneElementIfValidElementOfType(child, FormInputCheckbox, {
        name,
      }),
    )}
    {message && <Text size="small">{message}</Text>}
  </Block>
);
