import { style, type StyleRule } from '@vanilla-extract/css';
import { precomputedViewportRules, type Viewport } from './core.css.js';
import { genericVars } from './design-system.css.js';
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

export const modalClass = style({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  maxWidth: '100%',
  width: '100vw',
  height: '100vh',
  zIndex: 100,
  justifyContent: 'center',
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

export const commonDimensionsClass = style({
  '@media': typedObjectFromEntries(
    typedObjectEntries(commonViewportRules).map(([viewport, rule]) => [
      precomputedViewportRules[viewport],
      rule,
    ]),
  ),
});

export const iconClass = style({
  aspectRatio: '1/1',
});

export const buttonClass = style({
  // aspectRatio: '1/1',
});
