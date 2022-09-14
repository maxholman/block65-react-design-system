import { ClassValue, clsx } from 'clsx';
import { createElement, FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import type { FontSize } from './global-theme.css.js';
import {
  fontSize,
  secondaryStyle,
  strongStyle,
  textStyle,
} from './typography.css.js';

type HeadingLevel = '1' | '2' | '3' | '4' | '5';

function sizeToFontSize(size: FontSize) {
  return {
    [fontSize.tiny]: size === 'tiny',
    [fontSize.small]: size === 'small',
    [fontSize.standard]: size === 'standard',
    [fontSize.large]: size === 'large',
    [fontSize.huge]: size === 'huge',
  };
}

function levelToFontSize(level: HeadingLevel) {
  return {
    [fontSize.tiny]: level === '5',
    [fontSize.small]: level === '4',
    [fontSize.standard]: level === '3',
    [fontSize.large]: level === '2',
    [fontSize.huge]: level === '1',
  };
}

export const Text: FC<
  PropsWithChildren<{ size?: FontSize; className?: ClassValue }>
> = ({ className, size, ...props }) => (
  <Box
    component="p"
    {...props}
    className={[className, textStyle, !!size && sizeToFontSize(size)]}
  />
);

export const Secondary: FC<PropsWithChildren<{ className?: ClassValue }>> = ({
  className,
  ...props
}) => (
  <Box component="span" {...props} className={[secondaryStyle, className]} />
);

export const Strong: FC<PropsWithChildren<{ className?: ClassValue }>> = ({
  className,
  ...props
}) => <Box component="span" {...props} className={[strongStyle, className]} />;

export const Heading: FC<
  PropsWithChildren<{ level?: HeadingLevel; className?: ClassValue }>
> = ({ className, level = '1', children, ...props }) =>
  createElement(
    `h${level}`,
    {
      ...props,
      className: clsx(className, levelToFontSize(level)),
    },
    children,
  );
