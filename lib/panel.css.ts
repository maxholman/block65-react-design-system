import { createGlobalThemeContract, style } from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { globalVars, type Prefix } from './vars.css.js';

/**
 * Panel vars
 */
export const panelVarsMapFnPrefix = 'panel' satisfies Prefix;
export const panelVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: {
      inline: '',
      block: '',
    },
  },
  createGlobalThemeMapFn(panelVarsMapFnPrefix),
);

export const panelClassName = style({
  borderColor: globalVars.color.muted.borderColor,
  borderStyle: 'solid',
  borderWidth: globalVars.border.width,
  borderRadius: globalVars.border.radius,
  paddingBlock: panelVars.padding.block,
  paddingInline: panelVars.padding.inline,
});
