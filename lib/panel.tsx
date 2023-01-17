import { Block, CommonProps } from './layout.js';
import { PanelVariant, panelVariants } from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export const Panel = <T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component = 'section',
  className,
  variant = 'standard',
  ...props
}: CommonProps<T> & {
  variant?: PanelVariant;
}) => (
  <Block
    component={component}
    className={[className, panelVariants[variant]]}
    {...props}
  />
);
