import { useContext } from 'react';
import { Context } from '../context.js';

export function useDesignSystem() {
  return useContext(Context);
}
