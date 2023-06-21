import cookies from 'js-cookie';
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';
import type { JsonValue } from 'type-fest';
import { useTraceUpdate } from './use-trace-update.js';

type CookieAttributes = typeof cookies.attributes;
type RestrictedCookieAttributes = Omit<CookieAttributes, 'secure'>;

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunctionLike(obj: unknown): obj is Function {
  return obj instanceof Function;
}

function resolveValue<T extends JsonValue | undefined>(
  initialValue?: T | (() => T) | undefined,
) {
  return isFunctionLike(initialValue) ? initialValue() : initialValue;
}

/**
 *
 *
 * This allows you to use cookie without triggering a re-render
 *
 * If you want re-renders - `useCookieState`
 *
 * @param key
 * @param initialValue
 * @returns
 */

export function useCookie<T extends JsonValue>(
  key: string,
  initialValue?: T | (() => T | undefined) | undefined,
) {
  const namespace = `__app_${key}`;

  const resolvedInitialValue = useRef(resolveValue(initialValue));

  const getCookieValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return resolvedInitialValue.current;
    }

    try {
      const item = cookies.get(namespace);
      return item ? JSON.parse(item) : resolvedInitialValue.current;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn({ err }, Object(err).message);
      return resolvedInitialValue.current;
    }
  }, [namespace]);

  const setCookieValue = useCallback(
    (
      value: T | undefined,
      options?: RestrictedCookieAttributes,
    ): T | undefined => {
      if (typeof window !== 'undefined') {
        const resolvedOptions: CookieAttributes = {
          sameSite: 'strict',
          ...options,
          secure: true,
        };

        if (!value || value === resolvedInitialValue.current) {
          cookies.remove(namespace, resolvedOptions);
        } else {
          cookies.set(namespace, JSON.stringify(value), resolvedOptions);
        }
      }

      return value;
    },
    [namespace],
  );

  useTraceUpdate({ getCookieValue, setCookieValue });

  return [getCookieValue, setCookieValue] as const;
}

/**
 *
 *
 *
 * This allows you to use cookie while also triggering re-render
 *
 *
 * If you DO NOT WANT re-renders - use `useCookie`
 *
 * @param key
 * @param initialValue
 * @returns
 */

export function useCookieState<T extends JsonValue>(
  key: string,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>];

export function useCookieState<T extends JsonValue>(
  key: string,
  initialValue: T | (() => T),
  options?: RestrictedCookieAttributes,
): [T, Dispatch<SetStateAction<T>>];

export function useCookieState<T extends JsonValue>(
  key: string,
  initialValue?: T | (() => T),
  options?: RestrictedCookieAttributes,
) {
  const [cookieValue, setCookieValue] = useCookie(key, initialValue);
  const [state, setStateValue] = useState(cookieValue);

  const setState = useCallback(
    (
      value: T | ((current: T | undefined) => T | undefined) | undefined,
    ): void => {
      const resolvedValue = isFunctionLike(value)
        ? value(cookieValue())
        : value;

      setCookieValue(resolvedValue, options);
      setStateValue(resolvedValue);
    },

    [cookieValue, options, setCookieValue],
  );

  useTraceUpdate({ cookieValue, options, setCookieValue });
  useTraceUpdate({ state, setState });

  return [state, setState];
}
