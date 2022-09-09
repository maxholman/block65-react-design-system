import { clsx } from 'clsx';
import { createElement } from 'react';
import type { BoxBasedComponentProps } from './core.js';
import { Block } from './layout.js';
import {
  PanelElevation,
  panelElevations,
  PanelVariant,
  panelVariants,
} from './panel.css.js';
import type { Space } from './themes.css.js';
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
    [panelElevations.elevation0]: elevation === 'elevation0',
    [panelElevations.elevation1]: elevation === 'elevation1',
    [panelElevations.elevation2]: elevation === 'elevation2',
  };
}

export function Panel<T extends keyof ReactHTMLAttributesHacked = 'section'>({
  component,
  className,
  space = 'standard',
  variant = 'standard',
  elevation = 'elevation0',
  ...props
}: BoxBasedComponentProps<
  T,
  {
    component?: T;
    space?: Space;
    variant?: PanelVariant;
    elevation?: PanelElevation;
  }
>) {
  return createElement(Block, {
    ...props,
    space,
    className: clsx(
      className,
      variantToPanelVariant(variant),
      variantToPanelElevation(elevation),
    ),
  });
}
