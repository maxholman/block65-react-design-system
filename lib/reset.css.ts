import { style, globalStyle } from '@vanilla-extract/css';

export const resetClass = style({});

function withResetClass(...selectors: string[]) {
  return `:where(${resetClass}) ${selectors.join(',')}`;
}

// Based on the-new-css-reset
// The new CSS reset - version 1.9 (last updated 19.6.2023)

const everythingSelector =
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))';

globalStyle(
  /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
 */
  withResetClass(everythingSelector),
  {
    all: 'unset',
    display: 'revert',
    minWidth: 0, // WARN: Custom
  },
);

/* Preferred box-sizing value */
globalStyle(withResetClass('*', '*::before', '*::after'), {
  boxSizing: 'border-box',
});

/* Reapply the pointer cursor for anchor tags */
globalStyle(withResetClass('a', 'button'), {
  cursor: 'revert',
});

/* Remove list styles (bullets/numbers) */
globalStyle(withResetClass('ol', 'ul', 'menu'), {
  listStyle: 'none',
});

/* For images to not be able to exceed their container */
globalStyle(withResetClass('img'), {
  maxInlineSize: '100%',
  maxBlockSize: '100%',
});

/* removes spacing between cells in tables */
globalStyle(withResetClass('table'), {
  borderCollapse: 'collapse',
});

/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
globalStyle(withResetClass('input', 'textarea'), {
  WebkitUserSelect: 'auto',
});

/* revert the 'white-space' property for textarea elements on Safari */
globalStyle(withResetClass('textarea'), {
  whiteSpace: 'revert',
});

/* minimum style to allow to style meter element */
globalStyle(withResetClass('meter'), {
  WebkitAppearance: 'revert',
  appearance: 'revert',
});

/* preformatted text - use only for this feature */
globalStyle(withResetClass(':where(pre)'), {
  all: 'revert',
});

/* reset default text opacity of input placeholder */
globalStyle(withResetClass('::placeholder'), {
  color: 'unset',
});

/* remove default dot (•) sign */
globalStyle(withResetClass('::marker'), {
  content: 'initial',
});

/* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
globalStyle(withResetClass(':where([hidden])'), {
  display: 'none',
});

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
globalStyle(
  withResetClass(':where([contenteditable]:not([contenteditable="false"]))'),
  {
    MozUserModify: 'read-write',
    WebkitUserModify: 'read-write',
    overflowWrap: 'break-word',
    // WebkitLineBreak: 'after-white-space',
    WebkitUserSelect: 'auto',
  },
);

/* apply back the draggable feature - exist only in Chromium and Safari */
globalStyle(withResetClass(':where([draggable="true"])'), {
  // @ts-expect-error - only for Chromium and Safari
  WebkitUserDrag: 'element',
});

/* Revert Modal native behavior */
globalStyle(withResetClass(':where(dialog:modal)'), {
  all: 'revert',
});

// CUSTOM
globalStyle(withResetClass(everythingSelector), {
  minWidth: 0,
});
