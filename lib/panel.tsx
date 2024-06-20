import { Block, type FlexProps } from './layout.js';
import type { ReactHTMLElementsHacked } from './react-html-elements.js';

export const Panel = <T extends keyof ReactHTMLElementsHacked>(
  props: FlexProps<T>,
) => (
  <Block
    padding="3"
    {...props}
    style={{
      border: '1px solid #888',
    }}
  />
);
