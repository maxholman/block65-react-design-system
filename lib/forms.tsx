import { ClassValue, clsx } from 'clsx';
import {
  FC,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useId,
} from 'react';
import { formInput, labelStyle } from './forms.css.js';
import { Block, Inline } from './layout.js';
import { sprinkles } from './sprinkles.css.js';
import type { Space } from './themes.css.js';
import { Text } from './typography.js';

export const Form: FC<
  PropsWithChildren<{ className?: ClassValue; space?: Space }>
> = ({ className, space = 'huge', ...props }) => (
  <Block
    space={space}
    component="form"
    {...props}
    data-peeppppp={sprinkles({ color: 'blue100' })}
  />
);

export const Label: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    className?: ClassValue;
    secondary?: ReactNode;
    tertiary?: ReactNode;
  }
> = ({ className, secondary, tertiary, children, ...props }) => (
  <Inline
    space="huge"
    {...props}
    component="label"
    className={labelStyle}
    data-peeppppp={sprinkles({ color: 'blue100' })}
  >
    <Text>{children}</Text>
    {secondary && <Text>{secondary}</Text>}
    {tertiary && <Text>{tertiary}</Text>}
  </Inline>
);

export const FormInput: FC<
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
  className,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  ...props
}) => {
  const id = useId();

  return (
    <Block space="small">
      <Label htmlFor={id} secondary={secondaryLabel} tertiary={tertiaryLabel}>
        {label}
      </Label>
      <input
        className={clsx(formInput, className)}
        id={id}
        {...props}
        data-peeppppp={sprinkles({ color: 'blue100', background: 'blue101a' })}
      />
      {message && <Text size="small">{message}</Text>}
    </Block>
  );
};
