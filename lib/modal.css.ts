import { style, type StyleRule } from '@vanilla-extract/css';
import {
  globalVars,
  precomputedViewportRules,
  type Viewport,
} from './box.css.js';
import { genericVars } from './box.css.js';
import { typedObjectEntries, typedObjectFromEntries } from './utils.js';

// WARN: ordering is important here as it affects the generated CSS
// it should be the opposite order of viewportSizes (I think)
const commonViewportRules: Record<Viewport, StyleRule> = {
  tablet: {
    width: '60vw',
    padding: genericVars.space[6],
    marginInline: 'auto',
  },

  mobile: {
    minWidth: '100vw',
    minHeight: '100vh',
    marginBlock: 'unset', // unset inheritance from tablet
  },

  desktop: {
    width: '35rem',
    marginBlock: genericVars.space[8],
    marginInline: 'auto',
  },

  wide: {},
  all: {},
};

const commonBackdropProps: StyleRule = {
  // WARN: Brightness should probably be a var based on contrast scheme?
  backdropFilter: 'blur(0.5rem) brightness(0.95)',
};

export const dialogClass = style({
  // these are annoyingly not part of dialog element reset
  border: 0,
  padding: 0,
  margin: 0,

  selectors: {
    '&:not([open])': {
      visibility: 'hidden',
    },
    '&::backdrop': {
      ...commonBackdropProps,
    },
  },
});

export const modalClassName = style({
  position: 'fixed',
  top: 0,
  left: 0,
  maxWidth: '100%',
  width: '100vw',
  height: '100vh',
  zIndex: 100,
  selectors: {
    // '&:not([open])': {
    //   visibility: 'hidden',
    // },

    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      ...commonBackdropProps,
    },
  },
});

export const modalInnerClassName = style({
  backgroundColor: globalVars.color.bgColor,
  borderRadius: globalVars.border.radius,
  outlineColor: globalVars.color.borderColor,
  outlineWidth: globalVars.border.width,
  outlineStyle: 'solid',
});

export const commonDimensionsClass = style({
  '@media': typedObjectFromEntries(
    typedObjectEntries(commonViewportRules).map(([viewport, rule]) => [
      precomputedViewportRules[viewport],
      rule,
    ]),
  ),
});
