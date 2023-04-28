// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const dividerStyle = style({
  height: genericVars.border.width[1],
});
