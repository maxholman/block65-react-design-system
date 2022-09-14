import { ClassValue, clsx } from 'clsx';
import { createElement } from 'react';
import type { BoxBasedComponentProps } from './core.js';
import {
  alignItems,
  flexColumn,
  flexRow,
  marginBlock,
  marginInlineChildren,
} from './layout.css.js';
import type { Align, Space } from './global-theme.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';
import { augmentChildren } from './utils.js';

function spaceToMarginBlock(space: Space) {
  return {
    [marginBlock.none]: space === 'none',
    [marginBlock.tiny]: space === 'tiny',
    [marginBlock.small]: space === 'small',
    [marginBlock.standard]: space === 'standard',
    [marginBlock.large]: space === 'large',
    [marginBlock.huge]: space === 'huge',
  };
}

function spaceToMarginInline(space: Space) {
  return {
    [marginInlineChildren.tiny]: space === 'tiny',
    [marginInlineChildren.small]: space === 'small',
    [marginInlineChildren.standard]: space === 'standard',
    [marginInlineChildren.large]: space === 'large',
    [marginInlineChildren.huge]: space === 'huge',
  };
}

export function Block<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component,
  space = 'standard',
  align,
  className,
  children,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    component?: T;
    space?: Space;
    align?: Align;
  }
>) {
  return createElement(
    component || 'div',
    {
      ...props,
      className: clsx(flexColumn, className, align && alignItems[align]),
    },
    augmentChildren(children, {
      className: spaceToMarginBlock(space),
    }),
  );
}

export function Inline<T extends keyof ReactHTMLAttributesHacked = 'span'>({
  component,
  space = 'standard',
  className,
  children,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    className?: ClassValue;
    component?: T;
    space?: Space;
    align?: Align;
  }
>) {
  return createElement(
    component || 'span',
    {
      ...props,
      className: clsx(flexRow, className),
    },
    augmentChildren(children, {
      className: spaceToMarginInline(space),
    }),
  );
}

// probably grid and/or tiles
