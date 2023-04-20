import { type InputHTMLAttributes } from 'react';
import type { Space } from './core.css.js';

export const defaultFormInputSpace: Space = '4';

export function formInputProps(
  props: InputHTMLAttributes<HTMLInputElement>,
): Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>> {
  const common = {
    ...(props.readOnly && { tabIndex: -1 }),
  };

  switch (props.type) {
    case 'url':
      return {
        ...common,
        autoComplete: 'url',
        minLength: 3,
        maxLength: 2048,
        pattern: '^(https?://)?[a-z0-9-]+(.[a-z0-9-]+)*(:[0-9]+)?(/.*)?$',
        placeholder: 'https://www.example.com',
      };
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
