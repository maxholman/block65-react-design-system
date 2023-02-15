import {
  type ComplexStyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export type Align = 'start' | 'center' | 'end';

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexColumnVariants = styleVariants(genericVars.space, (space) => [
  flexColumn,
  {
    gap: space,
  },
]);

export const flexRowVariants = styleVariants(genericVars.space, (space) => [
  flexRow,
  {
    alignItems: 'center',
    gap: space,
  },
]);

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
