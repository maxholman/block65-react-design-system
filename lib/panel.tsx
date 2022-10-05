import type { BoxBasedComponentProps } from './core.js';
import type { Space } from './theme.css.js';
import { Block } from './layout.js';
import {
  elevations,
  PanelElevation,
  PanelVariant,
  panelVariantsClasses,
} from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Panel<T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component,
  children,
  className,
  elevation = 'none',
  space = 'standard',
  variant = 'standard',
  ...props
}: BoxBasedComponentProps<
  T,
  {
    elevation?: PanelElevation;
    space?: Space;
    variant?: PanelVariant;
  }
>) {
  return (
    <Block
      space={space}
      className={[
        className,
        panelVariantsClasses[variant],
        elevations[elevation],
      ]}
      {...props}
    >
      {children}
    </Block>
  );
}
