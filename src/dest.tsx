export function dest(path: string): URL {
  return new URL(path, window.location.origin);
}
