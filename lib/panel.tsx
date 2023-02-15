import { Block, CommonProps } from './layout.js';
import { PanelVariant, panelVariants } from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export const Panel = <T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component = 'section',
  className,
  variant = 'standard',
  rounded = 'medium',
  ...props
}: CommonProps<T> & {
  variant?: PanelVariant;
}) => (
  <Block
    component={component}
    rounded={rounded}
    className={[className, panelVariants[variant]]}
    {...props}
  />
);
