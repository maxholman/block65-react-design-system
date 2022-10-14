import { style, globalStyle } from '@vanilla-extract/css';

export const resetClass = style({});

function withResetClass(...selectors: string[]) {
  return `:where(${resetClass}) ${selectors.join(',')}`;
}

globalStyle(
  withResetClass(
    '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  ),
  {
    all: 'unset',
    display: 'revert',
  },
);

globalStyle(withResetClass('*', '*::before', '*::after'), {
  boxSizing: 'border-box',
});

globalStyle(withResetClass('a', 'button'), {
  cursor: 'revert',
});

globalStyle(withResetClass('ol', 'ul', 'menu'), {
  listStyle: 'none',
});

globalStyle(withResetClass('img'), {
  maxWidth: '100%',
});

globalStyle(withResetClass('table'), {
  borderCollapse: 'collapse',
});

globalStyle(withResetClass('input', 'textarea'), {
  WebkitUserSelect: 'auto',
});

globalStyle(withResetClass('textarea'), {
  whiteSpace: 'revert',
});

globalStyle(withResetClass('meter'), {
  WebkitAppearance: 'revert',
  appearance: 'revert',
});

globalStyle(withResetClass('::placeholder'), {
  color: 'unset',
});

globalStyle(withResetClass(':where([hidden])'), {
  display: 'none!important',
});

globalStyle(
  withResetClass(':where([contenteditable]:not([contenteditable="false"]))'),
  {
    MozUserModify: 'read-write',
    WebkitUserModify: 'read-write',
    overflowWrap: 'break-word',
    // @ts-expect-error - 'after-white-space' doesn't exist in the type defs
    WebkitLineBreak: 'after-white-space',
    WebkitUserSelect: 'auto',
  },
);

globalStyle(withResetClass(':where([draggable="true"])'), {
  // @ts-expect-error - WebkitUserDrag doesn't exist in the type defs
  WebkitUserDrag: 'element',
});

// restore focus styles
globalStyle(withResetClass(':where(html) :focus,:focus-visible'), {
  outline: 'revert',
});
