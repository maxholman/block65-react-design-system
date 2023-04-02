import { style, type StyleRule } from '@vanilla-extract/css';
import { viewportRules, type Viewport } from './core.css.js';
import { genericVars } from './design-system.css.js';
import { typedObjectEntries, typedObjectFromEntries } from './utils.js';

const modalViewportRules: Record<Viewport, StyleRule> = {
  mobile: {
    width: '100vw',
    height: '100vh',
  },
  tablet: {
    margin: genericVars.space[7],
    width: '60vw',
  },
  desktop: {
    margin: genericVars.space[10],
    width: '35rem',
  },
  all: {},
  wide: {},
};

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
  alignItems: 'flex-start',
  backdropFilter: 'blur(1rem)',
});

export const modalInnerClass = style({
  boxShadow: genericVars.boxShadow[3],
  '@media': typedObjectFromEntries(
    typedObjectEntries(modalViewportRules).map(([viewport, rule]) => [
      viewportRules[viewport],
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
