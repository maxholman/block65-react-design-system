import { useId } from 'react';

export function useIdWithDefault(id: string | undefined): string {
  const generatedId = useId();
  return id || generatedId;
}
