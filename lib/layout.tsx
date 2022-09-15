import { clsx } from 'clsx';
import { createElement } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import type { Space } from './theme.css.js';
import {
  alignItems,
  flexColumn,
  flexRow,
  marginBlockChildren,
  marginInlineChildren,
} from './layout.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';
import { augmentChildren } from './utils.js';

function spaceToMarginBlockChildren(space: Space) {
  return {
    [marginBlockChildren.none]: space === 'none',
    [marginBlockChildren.tiny]: space === 'tiny',
    [marginBlockChildren.small]: space === 'small',
    [marginBlockChildren.standard]: space === 'standard',
    [marginBlockChildren.large]: space === 'large',
    [marginBlockChildren.huge]: space === 'huge',
  };
}

function spaceToMarginInlineChildren(space: Space) {
  return {
    [marginInlineChildren.tiny]: space === 'tiny',
    [marginInlineChildren.small]: space === 'small',
    [marginInlineChildren.standard]: space === 'standard',
    [marginInlineChildren.large]: space === 'large',
    [marginInlineChildren.huge]: space === 'huge',
  };
}

export function Block<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'standard',
  className,
  children,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    space?: Space;
  }
>) {
  return (
    <Box {...props} className={[flexColumn, className]} component={component}>
      {augmentChildren(children, {
        className: spaceToMarginBlockChildren(space),
      })}
    </Box>
  );
}

export function Inline<T extends keyof ReactHTMLAttributesHacked = 'span'>({
  children,
  className,
  component,
  space = 'standard',
  align,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    space?: Space;
  }
>) {
  return createElement(
    component || 'span',
    {
      ...props,
      className: clsx(flexRow, className, align && alignItems[align]),
    },
    augmentChildren(children, {
      className: spaceToMarginInlineChildren(space),
    }),
  );
}
