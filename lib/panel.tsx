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
  component = 'section',
  variant = 'standard',
  rounded = 'medium',
  padding = 'medium',
  className,
  ...props
}: PanelProps<T>) => (
  <Block
    component={component}
    rounded={rounded}
    padding={padding}
    className={[className, panelVariants[variant]]}
    {...props}
  />
);
