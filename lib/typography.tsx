import { ClassValue, clsx } from 'clsx';
import { createElement, FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import type { FontSize, Tone } from './theme.css.js';
import {
  fontStyle,
  secondaryStyle,
  strongStyle,
  textStyle,
  toneStyle,
} from './typography.css.js';

type HeadingLevel = '1' | '2' | '3' | '4' | '5';

function sizeToFontSize(size: FontSize) {
  return {
    [fontStyle.tiny]: size === 'tiny',
    [fontStyle.small]: size === 'small',
    [fontStyle.normal]: size === 'normal',
    [fontStyle.large]: size === 'large',
    [fontStyle.huge]: size === 'huge',
  };
}

function levelToFontSize(level: HeadingLevel) {
  return {
    [fontStyle.tiny]: level === '5',
    [fontStyle.small]: level === '4',
    [fontStyle.normal]: level === '3',
    [fontStyle.large]: level === '2',
    [fontStyle.huge]: level === '1',
  };
}

function toneToFontStyle(tone: Tone) {
  return {
    [toneStyle.bad]: tone === 'bad',
    [toneStyle.good]: tone === 'good',
  };
}

export const Text: FC<
  PropsWithChildren<{
    size?: FontSize;
    className?: ClassValue;
    tone?: Tone | undefined;
  }>
> = ({ className, size = 'normal', tone, ...props }) => (
  <Box
    component="p"
    {...props}
    className={[
      textStyle,
      sizeToFontSize(size),
      tone && toneToFontStyle(tone),
      className,
    ]}
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
      className: clsx(levelToFontSize(level), className),
    },
    children,
  );
