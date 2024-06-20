import {
  createGlobalThemeContract,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.css.js';

export type BadgeVariant =
  | 'default'
  | 'info'
  | 'positive'
  | 'error'
  | 'attention';

const badgeVarsShape = { bgColor: '', fgColor: '', borderColor: '' };

export const badgeVars = createGlobalThemeContract(
  {
    border: {
      radius: '',
      width: '',
    },
  },
  createGlobalThemeMapFn('badge'),
);

export const badgeVariantVars = createGlobalThemeContract(
  {
    default: badgeVarsShape,
    info: badgeVarsShape,
    positive: badgeVarsShape,
    error: badgeVarsShape,
    attention: badgeVarsShape,
  } satisfies Record<BadgeVariant, typeof badgeVarsShape>,
  createGlobalThemeMapFn('badge'),
);

export const badgeVariantClassNames = styleVariants(badgeVariantVars, (v) => ({
  color: v.fgColor,
  backgroundColor: v.bgColor,
  borderColor: fallbackVar(v.borderColor, v.bgColor),
}));

export const badgeClassName = style({
  borderRadius: badgeVars.border.radius,
  borderWidth: badgeVars.border.width,
  borderStyle: 'solid',
});
