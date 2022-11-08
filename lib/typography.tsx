import { ClassValue, clsx } from 'clsx';
import { createElement, FC, PropsWithChildren } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import { Info } from './icons.js';
import { alignItems, inlineAlignSelf } from './layout.css.js';
import { Inline } from './layout.js';
import type { FontSize, Tone } from './design-system.css.js';
import {
  calloutClass,
  fontClass,
  HeadingLevel,
  levelVariantClasses,
  secondaryClass,
  strongClass,
  textClass,
  toneVariants,
} from './typography.css.js';

export const Heading: FC<
  PropsWithChildren<{ level?: HeadingLevel; className?: ClassValue }>
> = ({ className, level = '1', children, ...props }) =>
  createElement(
    `h${level}`,
    {
      className: clsx(levelVariantClasses[level], className),
      ...props,
    },
    children,
  );

export const Text: FC<
  PropsWithChildren<
    BoxBasedComponentProps<
      'p',
      {
        size?: FontSize;
        tone?: Tone | undefined;
      }
    >
  >
> = ({ className, size = 'normal', tone, align, ...props }) => (
  <Box
    component="p"
    className={[
      textClass,
      fontClass[size],
      tone && toneVariants[tone],
      align && inlineAlignSelf[align],
      className,
    ]}
    {...props}
  />
);

export const Strong: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  ...props
}) => <Box component="span" {...props} className={strongClass} />;

export const Secondary: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  align,
  ...props
}) => <Box component="span" className={secondaryClass} {...props} />;

export const Callout: FC<
  BoxBasedComponentProps<
    'span',
    {
      tone?: Tone;
      align?: never;
    }
  >
> = ({ children, className, tone = 'info', ...props }) => (
  <Box
    component="div"
    className={[tone && toneVariants[tone], calloutClass, className]}
    role="alert"
    aria-live="polite"
    {...props}
  >
    <Inline space="small" className={alignItems.center}>
      <Info />
      {children}
    </Inline>
  </Box>
);
