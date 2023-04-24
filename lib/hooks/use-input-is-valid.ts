import {
  type ForwardedRef,
  type MutableRefObject,
  useCallback,
  useRef,
} from 'react';

function useInputValidity(
  ref?:
    | MutableRefObject<HTMLInputElement>
    | MutableRefObject<HTMLTextAreaElement>
    | ForwardedRef<HTMLInputElement>
    | ForwardedRef<HTMLTextAreaElement>,
): Partial<ValidityState> & { valid: boolean } {
  return ref && 'current' in ref && ref.current
    ? ref.current.validity
    : { valid: true };
}

export function useInputIsValid(
  ref?:
    | MutableRefObject<HTMLInputElement>
    | MutableRefObject<HTMLTextAreaElement>
    | ForwardedRef<HTMLInputElement>
    | ForwardedRef<HTMLTextAreaElement>,
): boolean {
  const validity = useInputValidity(ref);
  return validity.valid || validity.customError !== true;
}

export function useFormIsValid() {
  const formRef = useRef<HTMLFormElement>(null);
  return [
    formRef,
    useCallback(() => {
      formRef.current?.checkValidity();
    }, []),
  ] as const;
}
