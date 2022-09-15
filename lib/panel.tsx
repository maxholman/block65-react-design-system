import type { BoxBasedComponentProps } from './core.js';
import type { Space } from './theme.css.js';
import { Block } from './layout.js';
import {
  elevations,
  PanelElevation,
  PanelVariant,
  panelVariants,
} from './panel.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

function variantToPanelVariant(variant: PanelVariant) {
  return {
    [panelVariants.standard]: variant === 'standard',
    [panelVariants.ghost]: variant === 'ghost',
    [panelVariants.subtle]: variant === 'subtle',
  };
}

function variantToPanelElevation(elevation: PanelElevation) {
  return {
    [elevations.elevationNone]: elevation === 'elevationNone',
    [elevations.elevationBottom]: elevation === 'elevationBottom',
    [elevations.elevation1]: elevation === 'elevation1',
    [elevations.elevation2]: elevation === 'elevation2',
    [elevations.elevation3]: elevation === 'elevation3',
    [elevations.elevationTop]: elevation === 'elevationTop',
  };
}

export function Panel<T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component,
  children,
  className,
  elevation = 'elevationNone',
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
        variantToPanelVariant(variant),
        variantToPanelElevation(elevation),
      ]}
      {...props}
    >
      {children}
    </Block>
  );
}
