import { Block, type CommonProps } from './layout.js';
import { type PanelVariant, panelVariants } from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export const Panel = <T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component = 'section',
  variant = 'standard',
  rounded = 'medium',
  padding = 'medium',
  className,
  ...props
}: CommonProps<T> & {
  variant?: PanelVariant;
}) => (
  <Block
    component={component}
    rounded={rounded}
    padding={padding}
    className={[className, panelVariants[variant]]}
    {...props}
  />
);
