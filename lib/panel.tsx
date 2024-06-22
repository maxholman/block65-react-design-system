import { Block, type FlexProps } from './layout.js';
import { panelClassName } from './panel.css.js';
import type { ReactHTMLElementsHacked } from './react-html-elements.js';

export const Panel = <T extends keyof ReactHTMLElementsHacked>({
  className,
  ...props
}: FlexProps<T>) => (
  <Block className={[className, panelClassName]} {...props} />
);
