import { type InputHTMLAttributes } from 'react';
import type { Space } from './core.css.js';
import type { BoxProps } from './core.js';

export const defaultFormInputSpace: Space = '4';

export function formInputProps(
  props: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
) {
  const common = {
    ...(props.readOnly && {
      paddingInline: '0',
      tabIndex: -1,
      autoFocus: false,
      inert: '',
    }),
    ...(!props.readOnly && {
      borderTone: 'neutral',
      borderWidth: '1',
      tone: 'neutral',
      background: '0',
    }),
  } satisfies BoxProps<'input' | 'textarea'>;

  switch (props.type) {
    case 'url':
      return {
        ...common,
        autoComplete: 'url',
        minLength: 3,
        maxLength: 2048,
        pattern: '^(https?:\\/\\/)?(([a-z0-9-]+)\\.)+([a-z0-9-]+){2,}(/.*)?$',
        placeholder: 'https://www.example.com',
      } satisfies BoxProps<'input'>;
    case 'email':
      return {
        ...common,
        autoComplete: 'email',
        minLength: 6,
        maxLength: 320,
        pattern: '^[^@]+@[^@]+\\.[^@]{2,}$',
        placeholder: 'email@example.com',
      } satisfies BoxProps<'input'>;
    default: {
      return common;
    }
  }
}
