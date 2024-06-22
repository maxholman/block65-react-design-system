import { styleVariants, type ComplexStyleRule } from '@vanilla-extract/css';

export type Placement = 'start' | 'center' | 'end';

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

export const justifyContentVariants = styleVariants<
  Record<Placement, ComplexStyleRule>
>({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
});
