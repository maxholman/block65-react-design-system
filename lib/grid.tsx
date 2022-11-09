import { gridClass } from './grid.css.js';
import { Block, BlockProps } from './layout.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Grid<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component,
  className,
  space = 'standard',
  ...props
}: BlockProps<T>) {
  return <Block space={space} className={[className, gridClass]} {...props} />;
}
