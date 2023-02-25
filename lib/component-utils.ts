import type { ClassValue } from 'clsx';
import type { Responsive, Viewport } from './core.css.js';
import { typedObjectEntries } from './utils.js';

export function differentOriginLinkProps(href: string) {
  if (typeof window !== 'undefined') {
    const testUrl = new URL(href, window.location.origin);
    if (testUrl.origin !== window.location.origin) {
      return { target: '_blank', rel: 'noopener noreferrer' };
    }
  }
  return null;
}

export function matchViewportVariants<T extends string | number>(
  resp: Responsive<T>,
  variants: Record<Viewport, Record<T, string>>,
): ClassValue[] {
  return typedObjectEntries(resp)
    .map(([viewport, value]) => value && variants[viewport][value])
    .filter((c): c is string => !!c);
}
