import { createGlobalThemeContract } from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';

export type PurposeVariant =
  | 'default'
  | 'info'
  | 'critical'
  | 'positive'
  | 'attention';

const purposeVariantVarsShape = {
  bgColor: '',
  fgColor: '',
  borderColor: '',
};

const purposeVariantTypes = {
  ...purposeVariantVarsShape,
  muted: purposeVariantVarsShape,
  // emphasis: purposeVariantVarsShape,
};

export const purposeVariantVarsMapFnPrefix = 'purpose';
export const purposeVariantVars = createGlobalThemeContract(
  {
    info: purposeVariantTypes,
    critical: purposeVariantTypes,
    default: purposeVariantTypes,
    positive: purposeVariantTypes,
    attention: purposeVariantTypes,
  } satisfies Record<PurposeVariant, typeof purposeVariantTypes>,
  createGlobalThemeMapFn(purposeVariantVarsMapFnPrefix),
);
