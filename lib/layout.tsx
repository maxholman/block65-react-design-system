import { clsx } from 'clsx';
import { createElement } from 'react';
import type { BoxBasedComponentProps } from './core.js';
import {
  alignItems,
  flexColumn,
  flexRow,
  marginBlock,
  marginInline,
} from './layout.css.js';
import type { Align, Space } from './themes.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';
import { augmentChildren } from './utils.js';

function spaceToMarginBlock(space: Space) {
  return {
    [marginBlock.tiny]: space === 'tiny',
    [marginBlock.small]: space === 'small',
    [marginBlock.standard]: space === 'standard',
    [marginBlock.large]: space === 'large',
    [marginBlock.huge]: space === 'huge',
  };
}

function spaceToMarginInline(space: Space) {
  return {
    [marginInline.tiny]: space === 'tiny',
    [marginInline.small]: space === 'small',
    [marginInline.standard]: space === 'standard',
    [marginInline.large]: space === 'large',
    [marginInline.huge]: space === 'huge',
  };
}

export function Block<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component,
  space,
  align,
  className,
  children,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    component?: T;
    space: Space;
    align?: Align;
  }
>) {
  return createElement(component || 'div', {
    ...props,
    className: clsx(flexColumn, className, align && alignItems[align]),
    children: augmentChildren(children, {
      className: spaceToMarginBlock(space),
    }),
  });
}

export function Inline<T extends keyof ReactHTMLAttributesHacked = 'span'>({
  component,
  className,
  children,
  space,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    component?: T;
    space: Space;
    align?: Align;
  }
>) {
  return createElement(component || 'span', {
    ...props,
    className: clsx(flexRow, className),
    children: augmentChildren(children, {
      className: spaceToMarginInline(space),
    }),
  });
}

// probably grid and/or tiles
