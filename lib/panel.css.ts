import { style } from '@vanilla-extract/css';
import { globalVars, panelVars } from './ve.css.js';

export const panelClassName = style({
  borderColor: globalVars.color.muted.borderColor,
  borderStyle: 'solid',
  borderWidth: globalVars.border.width,
  borderRadius: globalVars.border.radius,
  paddingBlock: panelVars.padding.block,
  paddingInline: panelVars.padding.inline,
});
