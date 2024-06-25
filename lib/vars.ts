import { badgeVars, badgeVarsMapFnPrefix } from './badge.css.js';
import { buttonVariantMapFnPrefix, buttonVariantVars } from './button.css.js';
import { calloutVars, calloutVarsMapFnPrefix } from './callout.css.js';
import { formControlVars, formControlVarsMapFnPrefix } from './forms.css.js';
import { textLinkVars, textLinkVarsMapFnPrefix } from './link.css.js';
import { panelVars, panelVarsMapFnPrefix } from './panel.css.js';
import {
  purposeVariantVars,
  purposeVariantVarsMapFnPrefix,
} from './purpose.css.js';
import {
  buttonVariantTokens,
  defaultGlobalTokens,
  defaultPropsTokens,
  defaultTextLinkTokens,
  defaultTextTokens,
  formControlTokens,
  panelTokens,
  purposeVariantTokens,
} from './tokens.js';
import { textVariantVars, textVarsMapFnPrefix } from './typography.css.js';
import type {
  CSSVarFunction,
  MapLeafNodes,
} from './vanilla-extract-css-types.js';
import {
  globalVars,
  globalVarsMapFnPrefix,
  type Prefix,
  propsVars,
  propsVarsMapFnPrefix,
} from './vars.css.js';

type TokenPrimitive = string | CSSVarFunction;
type TokenValues = TokenPrimitive | TokenObject;
type TokenObject = { [Key in string]: TokenValues };

type VarValues = CSSVarFunction | VarObject;
type VarObject = { [Key in string]: VarValues };

export const vars = {
  [globalVarsMapFnPrefix]: globalVars,
  [panelVarsMapFnPrefix]: panelVars,
  [formControlVarsMapFnPrefix]: formControlVars,
  [propsVarsMapFnPrefix]: propsVars,
  [purposeVariantVarsMapFnPrefix]: purposeVariantVars,
  [textVarsMapFnPrefix]: textVariantVars,
  [textLinkVarsMapFnPrefix]: textLinkVars,
  [calloutVarsMapFnPrefix]: calloutVars,
  [buttonVariantMapFnPrefix]: buttonVariantVars,
  [badgeVarsMapFnPrefix]: badgeVars,
} satisfies Record<Prefix, VarObject>;

export const tokens = {
  [globalVarsMapFnPrefix]: defaultGlobalTokens,
  [panelVarsMapFnPrefix]: panelTokens,
  [formControlVarsMapFnPrefix]: formControlTokens,
  [propsVarsMapFnPrefix]: defaultPropsTokens,
  [textVarsMapFnPrefix]: defaultTextTokens,
  [textLinkVarsMapFnPrefix]: defaultTextLinkTokens,
  [purposeVariantVarsMapFnPrefix]: purposeVariantTokens,
  [calloutVarsMapFnPrefix]: {
    padding: '1rem',
  },
  [buttonVariantMapFnPrefix]: buttonVariantTokens,
  [badgeVarsMapFnPrefix]: {
    borderStyle: 'solid',
  },
} satisfies MapLeafNodes<typeof vars, TokenValues>;
