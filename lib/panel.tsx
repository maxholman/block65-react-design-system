import { Block, type BlockProps } from './layout.js';
import { panelVariants, type PanelVariant } from './panel.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';

export type PanelProps<T extends keyof ReactHTMLAttributesHacked = 'section'> =
  Merge<
    BlockProps<T>,
    {
      variant?: PanelVariant;
    }
  >;

export const Panel = <T extends keyof ReactHTMLAttributesHacked = 'section'>({
  variant = 'standard',
  className,
  ...props
}: PanelProps<T>) => (
  <Block
    component="section"
    rounded="medium"
    padding="medium"
    className={[className, panelVariants[variant]]}
    {...props}
  />
);
