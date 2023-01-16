export type Merge<A, B> = Omit<A, keyof B> & B;

export { ReactHTMLAttributesHacked } from './react-html-attributes.js';
export { ReactHTMLElementsHacked } from './react-html-elements.js';
