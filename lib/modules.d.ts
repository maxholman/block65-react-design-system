declare module '@capsizecss/metrics/inter' {
  export interface InterMetrics {
    familyName: string;
    capHeight: number;
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
    xHeight: number;
  }
  export const fontMetrics: InterMetrics;
  export default fontMetrics;
}

declare module '@capsizecss/metrics/robotoMono' {
  interface RobotoMonoMetrics {
    familyName: string;
    capHeight: number;
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
    xHeight: number;
  }
  export const fontMetrics: RobotoMonoMetrics;
  export default fontMetrics;
}
