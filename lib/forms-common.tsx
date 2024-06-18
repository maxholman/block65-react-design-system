import type { InputHTMLAttributes } from 'react';
import type { Space } from './core.css.js';
import type { BoxProps } from './core.js';

export const defaultFormInputSpace: Space = '5';

export function formInputBoxProps(
  props: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {},
) {
  const common: BoxProps<'input' | 'textarea'> = {
    ...props,
    ...(props.readOnly && {
      paddingInline: '0',
      tabIndex: -1,
      autoFocus: false,
      // inert: '',
    }),
    ...(!props.readOnly && {
      borderWidth: '1',
    }),
  };

  return common;
}

export function formInputElProps(
  props: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {},
) {
  switch (props.type) {
    case 'url':
      return {
        autoComplete: 'url',
        minLength: 3,
        maxLength: 2048,
        pattern: '^(https?:\\/\\/)?(([a-z0-9-]+)\\.)+([a-z0-9-]+){2,}(/.*)?$',
        placeholder: 'https://www.example.com',
      } satisfies InputHTMLAttributes<HTMLInputElement>;
    case 'email':
      return {
        autoComplete: 'email',
        minLength: 6,
        maxLength: 320,
        pattern: '^[^@]+@[^@]+\\.[^@]{2,}$',
        placeholder: 'email@example.com',
      } satisfies InputHTMLAttributes<HTMLInputElement>;
    default: {
      return {};
    }
  }
}

export function formInputProps(
  props: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {},
) {
  return {
    ...formInputElProps(props),
    ...formInputBoxProps(props),
  };
}
