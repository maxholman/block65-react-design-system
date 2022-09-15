import { style, styleVariants } from '@vanilla-extract/css';
import { colorVars, genericVars } from './theme.css.js';
import { hsl } from './utils.js';

export const textStyle = style(
  {
    // color: hsl(colorVars.color.accent.h, 20, 30),
    lineHeight: genericVars.text.lineHeight.standard,
  },
  'textStyle',
);

export const secondaryStyle = style(
  {
    color: hsl(colorVars.color.accent.h, 0, 30),
  },
  'secondaryStyle',
);

export const strongStyle = style(
  {
    fontWeight: genericVars.text.weight.bold,
  },
  'strongStyle',
);

export const fontStyle = styleVariants(
  genericVars.text.size,
  (value) => ({ fontSize: value }),
  'fontSize',
);

export const toneStyle = styleVariants(
  genericVars.color.tone,
  (value) => ({ color: value }),
  'toneStyle',
);
