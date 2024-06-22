import { createGlobalTheme } from '@vanilla-extract/css';
import {
  formControlTokens,
  formControlVars,
  propsTokens,
  propsVars,
  globalVars,
  globalTokens,
  panelTokens,
  panelVars,
} from '../lib/vars.css.js';

const defaultsSelector = ':root';

createGlobalTheme(defaultsSelector, globalVars.border, globalTokens.border);
createGlobalTheme(defaultsSelector, panelVars.padding, panelTokens.padding);
createGlobalTheme(defaultsSelector, formControlVars, formControlTokens);
createGlobalTheme(defaultsSelector, propsVars, propsTokens);
