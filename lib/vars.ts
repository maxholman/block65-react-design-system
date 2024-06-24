import type { CSSVarFunction, MapLeafNodes } from '@vanilla-extract/css';
import {
  defaultGlobalTokens,
  defaultPropsTokens,
  defaultTextLinkTokens,
  defaultTextTokens,
  formControlTokens,
  panelTokens,
} from './tokens.js';
import {
  buttonVars,
  buttonVarsMapFnPrefix,
  calloutVars,
  calloutVarsMapFnPrefix,
  formControlVars,
  formControlVarsMapFnPrefix,
  globalVars,
  globalVarsMapFnPrefix,
  panelVars,
  panelVarsMapFnPrefix,
  type Prefix,
  propsVars,
  propsVarsMapFnPrefix,
  textLinkVars,
  textLinkVarsMapFnPrefix,
  textVariantVars,
  textVarsMapFnPrefix,
} from './vars.css.js';

type TokenPrimitive = string | CSSVarFunction;
type TokenValue = TokenPrimitive | TokenObject;
type TokenObject = { [Key in string]: TokenValue };

type VarValue = CSSVarFunction | VarObject;
type VarObject = { [Key in string]: VarValue };

export const vars = {
  [globalVarsMapFnPrefix]: globalVars,
  [panelVarsMapFnPrefix]: panelVars,
  [formControlVarsMapFnPrefix]: formControlVars,
  [propsVarsMapFnPrefix]: propsVars,
  [textVarsMapFnPrefix]: textVariantVars,
  [textLinkVarsMapFnPrefix]: textLinkVars,
  [buttonVarsMapFnPrefix]: buttonVars,
  [calloutVarsMapFnPrefix]: calloutVars,
  // [badgeVarsMapFnPrefix]: badgeVars,
} satisfies Record<Prefix, VarObject>;

export const tokens = {
  [globalVarsMapFnPrefix]: defaultGlobalTokens,
  [panelVarsMapFnPrefix]: panelTokens,
  [formControlVarsMapFnPrefix]: formControlTokens,
  [propsVarsMapFnPrefix]: defaultPropsTokens,
  [textVarsMapFnPrefix]: defaultTextTokens,
  [textLinkVarsMapFnPrefix]: defaultTextLinkTokens,
  [buttonVarsMapFnPrefix]: {},
  [calloutVarsMapFnPrefix]: {
    padding: '1rem',
  },
  // [badgeVarsMapFnPrefix]: {} as TokenObject,
} satisfies MapLeafNodes<typeof vars, TokenValue>;
