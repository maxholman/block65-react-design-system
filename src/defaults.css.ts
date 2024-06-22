import { createGlobalTheme } from '@vanilla-extract/css';
import {
  formControlTokens,
  formControlVars,
  generalTokens,
  generalVars,
  globalVars,
  globalVarTokens,
  panelTokens,
  panelVars,
} from '../lib/ve.css.js';

const defaultsSelector = ':root';

createGlobalTheme(defaultsSelector, globalVars.border, globalVarTokens);
createGlobalTheme(defaultsSelector, panelVars.padding, panelTokens.padding);
createGlobalTheme(defaultsSelector, formControlVars, formControlTokens);

createGlobalTheme(defaultsSelector, generalVars, generalTokens);
