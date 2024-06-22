import {
  formControlTokens,
  formControlVars,
  globalTokens,
  globalVars,
  panelTokens,
  panelVars,
  propsTokens,
  propsVars,
} from './vars.css.js';

export {
  badgeVars,
  badgeVarsMapFnPrefix,
  buttonVars,
  buttonVarsMapFnPrefix,
  formControlTokens,
  formControlVarsMapFnPrefix,
  globalTokens,
  globalVars,
  globalVarsMapFnPrefix,
  panelTokens,
  panelVars,
  panelVarsMapFnPrefix,
  propsTokens,
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
};

export const tokens = {
  global: {
    border: globalTokens.border,
  },
  panel: panelTokens,
  formControl: formControlTokens,
  props: propsTokens,
};
