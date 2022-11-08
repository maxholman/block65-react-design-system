import { gridClass } from './grid.css.js';
import { Block, BlockProps } from './layout.js';
import { elevations, type PanelElevation } from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Grid<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component,
  className,
  elevation = 'none',
  space = 'standard',
  ...props
}: BlockProps<T> & {
  elevation?: PanelElevation;
}) {
  return (
    <Block
      space={space}
      className={[className, gridClass, elevations[elevation]]}
      {...props}
    />
  );
}
