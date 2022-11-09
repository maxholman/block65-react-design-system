import { Block, BlockProps } from './layout.js';
import {
  elevations,
  PanelElevation,
  PanelVariant,
  panelVariantsClasses,
} from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Panel<T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component = 'section',
  className,
  elevation = 'none',
  variant = 'standard',
  ...props
}: BlockProps<T> & {
  elevation?: PanelElevation;
  variant?: PanelVariant;
}) {
  return (
    <Block
      className={[
        className,
        panelVariantsClasses[variant],
        elevations[elevation],
      ]}
      {...props}
    />
  );
}
