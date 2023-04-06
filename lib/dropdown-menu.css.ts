import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const menuPanelStyle = style({
  zIndex: 1, // get it above the typography
  boxShadow: genericVars.boxShadow[3],
});
