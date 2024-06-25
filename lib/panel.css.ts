import { createGlobalThemeContract, style } from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { baseVars, type Prefix } from './vars.css.js';

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
  borderColor: baseVars.color.muted.borderColor,
  borderStyle: 'solid',
  borderWidth: baseVars.border.width,
  borderRadius: baseVars.border.radius,
  paddingBlock: panelVars.padding.block,
  paddingInline: panelVars.padding.inline,
});
