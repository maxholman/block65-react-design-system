import {
  defaultTextLinkTokens,
  defaultTextTokens,
  formControlTokens,
  globalTokens,
  panelTokens,
  propsTokens,
} from './defaults.js';
import {
  formControlVars,
  globalVars,
  panelVars,
  propsVars,
  textLinkVars,
  textVariantVars,
} from './vars.css.js';

export {
  badgeVars,
  badgeVarsMapFnPrefix,
  buttonVars,
  buttonVarsMapFnPrefix,
  formControlVarsMapFnPrefix,
  globalVars,
  globalVarsMapFnPrefix,
  panelVars,
  panelVarsMapFnPrefix,
  propsVars,
  propsVarsMapFnPrefix,
} from './vars.css.js';

export const vars = {
  global: {
    border: globalVars.border,
  },
  panel: panelVars,
  formControl: formControlVars,
  props: propsVars,
  text: {
    fontWeight: textVariantVars.fontWeight,
  },
  textLinks: textLinkVars,
};

export const tokens = {
  global: {
    border: globalTokens.border,
  },
  panel: panelTokens,
  formControl: formControlTokens,
  props: propsTokens,
  text: {
    fontWeight: defaultTextTokens.fontWeight,
  },
  textLinks: defaultTextLinkTokens,
};
