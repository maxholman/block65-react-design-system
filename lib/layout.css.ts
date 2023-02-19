// eslint-disable-next-line import/no-extraneous-dependencies
import {
  style,
  styleVariants,
  type ComplexStyleRule,
} from '@vanilla-extract/css';

export type Align = 'start' | 'center' | 'end';

export const inlineClass = style({
  display: 'inline-flex',
});

export const alignItemsVariants = styleVariants<
  Record<Align, ComplexStyleRule>
>({
  start: { alignItems: 'start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'end' },
});

export const inlineAlignSelfVariants = styleVariants<
  Record<Align, ComplexStyleRule>
>({
  start: { marginInlineEnd: 'auto' },
  center: { marginInline: 'auto' },
  end: { marginInlineStart: 'auto' },
});
