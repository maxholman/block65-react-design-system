import { Block, BlockProps } from './layout.js';
import { PanelVariant, panelVariantsClasses } from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Panel<T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component = 'section',
  className,
  variant = 'standard',
  ...props
}: BlockProps<T> & {
  variant?: PanelVariant;
}) {
  return (
    <Block className={[className, panelVariantsClasses[variant]]} {...props} />
  );
}
