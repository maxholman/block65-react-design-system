/* @__PURE__ */
export function ifDebugBuild(cb: () => void): void {
  if (__DEBUG_BUILD__) {
    cb();
  }
}

/* @__PURE__ */
export function debugLogger(obj: Record<string, unknown>, msg?: string): void;
export function debugLogger(msg: string): void;
export function debugLogger(...args: unknown[]): void {
  ifDebugBuild(() => {
    // eslint-disable-next-line no-console
    console.log(...args);
  });
}
