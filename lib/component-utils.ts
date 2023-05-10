import type { ClassValue } from 'clsx';
import type { Falsy, Responsive, Viewport } from './core.css.js';
import { typedObjectEntries } from './utils.js';

export function isNotFalsy<T>(value: T | null | undefined | false): value is T {
  return value !== null && typeof value !== 'undefined';
}

export function differentOriginLinkProps(href: string) {
  if (typeof window !== 'undefined') {
    const testUrl = new URL(href, window.location.origin);
    if (testUrl.origin !== window.location.origin) {
      return { rel: 'noopener noreferrer' };
    }
  }
  return null;
}

export function matchViewportVariants<T extends string | number>(
  resp: Responsive<T | Falsy>,
  variants: Record<Viewport, Record<T, string>>,
): ClassValue[] {
  return typedObjectEntries(resp)
    .map(([viewport, value]) => isNotFalsy(value) && variants[viewport][value])
    .filter(isNotFalsy);
}
