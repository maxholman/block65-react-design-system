export type Merge<A, B> = Omit<A, keyof B> & B;

export type { ReactHTMLAttributesHacked } from './react-html-attributes.js';
export type { ReactHTMLElementsHacked } from './react-html-elements.js';
