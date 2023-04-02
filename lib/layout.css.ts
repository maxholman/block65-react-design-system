// eslint-disable-next-line import/no-extraneous-dependencies
import { styleVariants, type ComplexStyleRule } from '@vanilla-extract/css';

export type Placement = 'start' | 'center' | 'end';

export const flexShrinkClass = styleVariants<
  Record<`${boolean}`, ComplexStyleRule>
>({
  true: { flexShrink: 1 },
  false: { flexShrink: 0 },
});

export const flexGrowClass = styleVariants<
  Record<`${boolean}`, ComplexStyleRule>
>({
  true: { flexGrow: 1 },
  false: { flexGrow: 0 },
});

export const alignItemsVariants = styleVariants<
  Record<Placement, ComplexStyleRule>
>({
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
});

export const alignSelfVariants = styleVariants<
  Record<Placement, ComplexStyleRule>
>({
  start: { alignSelf: 'flex-start' },
  center: { alignSelf: 'center' },
  end: { alignSelf: 'flex-end' },
});

export const justifySelfInlineVariants = styleVariants<
  Record<Placement, ComplexStyleRule>
>({
  start: { marginInlineEnd: 'auto' },
  center: { marginInline: 'auto' },
  end: { marginInlineStart: 'auto' },
});

export const justifySelfBlockVariants = styleVariants<
  Record<Placement, ComplexStyleRule>
>({
  start: { marginBlockEnd: 'auto' },
  center: { marginBlock: 'auto' },
  end: { marginBlockStart: 'auto' },
});
