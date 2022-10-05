import { ClassValue, clsx } from 'clsx';
import { createElement, FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import type { FontSize, Tone } from './theme.css.js';
import {
  fontStyle,
  HeadingLevel,
  levelVariantClasses,
  secondaryStyle,
  strongStyle,
  textStyle,
  toneStyle,
} from './typography.css.js';

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
    className={[textStyle, fontStyle[size], tone && toneStyle[tone], className]}
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
      className: clsx(levelVariantClasses[level], className),
    },
    children,
  );
