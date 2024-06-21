import { createGlobalThemeContract, style } from '@vanilla-extract/css';
import { globalVars } from './box.css.js';
import { createGlobalThemeMapFn } from './css-helpers.css.js';

export const panelVars = createGlobalThemeContract(
  {
    border: {
      radius: '',
      width: '',
    },
    padding: {
      inline: '',
      block: '',
    },
  },
  createGlobalThemeMapFn('panel-default'),
);

export const panelClassName = style({
  borderColor: globalVars.color.muted.borderColor,
  borderStyle: 'solid',
  borderWidth: panelVars.border.width,
  borderRadius: panelVars.border.radius,
  paddingBlock: panelVars.padding.block,
  paddingInline: panelVars.padding.inline,
});
