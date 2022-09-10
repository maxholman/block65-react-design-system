import { ClassValue, clsx } from 'clsx';
import {
  Children,
  FC,
  InputHTMLAttributes,
  isValidElement,
  LabelHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useId,
} from 'react';
import {
  formInput,
  formInputCheckbox,
  formInputRadio,
  labelStyle,
} from './forms.css.js';
import { Block, Inline } from './layout.js';
import type { Space } from './themes.css.js';
import { Text } from './typography.js';

export const Form: FC<
  PropsWithChildren<{ className?: ClassValue; space: Space }>
> = ({ className, space, ...props }) => (
  <Block space={space} component="form" {...props} />
);

export const Label: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ className, secondary, tertiary, children, ...props }) => (
  <Inline space="huge" {...props} component="label" className={labelStyle}>
    <Text>{children}</Text>
    {secondary && <Text>{secondary}</Text>}
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
    <Block space="standard">
      <Label htmlFor={id} secondary={secondaryLabel} tertiary={tertiaryLabel}>
        {label}
      </Label>
      <input className={formInput} id={id} {...props} />
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
    <>
      <Inline space="small">
        <input
          className={clsx(formInputRadio, className)}
          type="radio"
          id={id}
          {...props}
        />
        <Block space="none">
          <Label htmlFor={id} className="FUCK">
            {label}
          </Label>
          <Text size="small">{message}</Text>
        </Block>
      </Inline>
    </>
  );
};

export const FormInputRadioGroup: FC<
  PropsWithChildren<
    InputHTMLAttributes<HTMLInputElement> & {
      className?: ClassValue;
      label: ReactNode;
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  // className,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  children,
  // ...props
}) => (
  <Block space="small">
    <Label secondary={secondaryLabel} tertiary={tertiaryLabel}>
      {label}
    </Label>
    <>
      {Children.map(children, (child) =>
        isValidElement(child) ? child : child,
      )}
    </>
    {message && <Text size="small">{message}</Text>}
  </Block>
);

export const FormInputCheckboxGroup: FC<
  PropsWithChildren<
    InputHTMLAttributes<HTMLInputElement> & {
      className?: ClassValue;
      label: ReactNode;
      secondaryLabel?: ReactNode;
      tertiaryLabel?: ReactNode;
      message?: ReactNode;
    }
  >
> = ({
  // className,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  children,
  // ...props
}) => (
  <Block space="small">
    <Label secondary={secondaryLabel} tertiary={tertiaryLabel}>
      {label}
    </Label>
    <>
      {Children.map(children, (child) =>
        isValidElement(child) ? child : child,
      )}
    </>
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
      'checkbox'
    >
  >
> = ({ className, message, label, ...props }) => {
  const id = useId();

  return (
    <>
      <Inline space="small">
        <input
          className={clsx(formInputCheckbox, className)}
          type="checkbox"
          id={id}
          {...props}
        />
        <Block space="none">
          <Label htmlFor={id}>{label}</Label>
          <Text size="small">{message}</Text>
        </Block>
      </Inline>
    </>
  );
};
