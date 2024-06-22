import { useContext } from 'react';
import { DesignSystemContext } from '../design-system-context.js';

export function useDesignSystem() {
  return useContext(DesignSystemContext);
}
