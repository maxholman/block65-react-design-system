import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColHTMLAttributes,
  ColgroupHTMLAttributes,
  DataHTMLAttributes,
  DelHTMLAttributes,
  DetailsHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  InsHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  QuoteHTMLAttributes,
  SlotHTMLAttributes,
  ScriptHTMLAttributes,
  SelectHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  TextareaHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
  WebViewHTMLAttributes,
} from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention
type DetailedHTMLFactory<_TAttributes, TElement> = TElement;

export interface ReactHTMLElementsHacked {
  a: DetailedHTMLFactory<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  area: DetailedHTMLFactory<
    AreaHTMLAttributes<HTMLAreaElement>,
    HTMLAreaElement
  >;
  article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  audio: DetailedHTMLFactory<
    AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  >;
  b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  base: DetailedHTMLFactory<
    BaseHTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >;
  bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  blockquote: DetailedHTMLFactory<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >;
  body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
  button: DetailedHTMLFactory<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  canvas: DetailedHTMLFactory<
    CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  >;
  caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  center: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  col: DetailedHTMLFactory<
    ColHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >;
  colgroup: DetailedHTMLFactory<
    ColgroupHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >;
  data: DetailedHTMLFactory<
    DataHTMLAttributes<HTMLDataElement>,
    HTMLDataElement
  >;
  datalist: DetailedHTMLFactory<
    HTMLAttributes<HTMLDataListElement>,
    HTMLDataListElement
  >;
  dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  del: DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
  details: DetailedHTMLFactory<
    DetailsHTMLAttributes<HTMLDetailsElement>,
    HTMLDetailsElement
  >;
  dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  dialog: DetailedHTMLFactory<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  >;
  div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
  dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  embed: DetailedHTMLFactory<
    EmbedHTMLAttributes<HTMLEmbedElement>,
    HTMLEmbedElement
  >;
  fieldset: DetailedHTMLFactory<
    FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >;
  figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  form: DetailedHTMLFactory<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
  h1: DetailedHTMLFactory<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h2: DetailedHTMLFactory<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h3: DetailedHTMLFactory<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h4: DetailedHTMLFactory<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h5: DetailedHTMLFactory<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h6: DetailedHTMLFactory<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
  header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
  html: DetailedHTMLFactory<
    HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >;
  i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  iframe: DetailedHTMLFactory<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >;
  img: DetailedHTMLFactory<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  input: DetailedHTMLFactory<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
  kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
  label: DetailedHTMLFactory<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  legend: DetailedHTMLFactory<
    HTMLAttributes<HTMLLegendElement>,
    HTMLLegendElement
  >;
  li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  link: DetailedHTMLFactory<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  >;
  main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
  mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
  menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  meta: DetailedHTMLFactory<
    MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >;
  meter: DetailedHTMLFactory<
    MeterHTMLAttributes<HTMLMeterElement>,
    HTMLMeterElement
  >;
  nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  object: DetailedHTMLFactory<
    ObjectHTMLAttributes<HTMLObjectElement>,
    HTMLObjectElement
  >;
  ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
  optgroup: DetailedHTMLFactory<
    OptgroupHTMLAttributes<HTMLOptGroupElement>,
    HTMLOptGroupElement
  >;
  option: DetailedHTMLFactory<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >;
  output: DetailedHTMLFactory<
    OutputHTMLAttributes<HTMLOutputElement>,
    HTMLOutputElement
  >;
  p: DetailedHTMLFactory<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
  param: DetailedHTMLFactory<
    ParamHTMLAttributes<HTMLParamElement>,
    HTMLParamElement
  >;
  picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
  progress: DetailedHTMLFactory<
    ProgressHTMLAttributes<HTMLProgressElement>,
    HTMLProgressElement
  >;
  q: DetailedHTMLFactory<
    QuoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >;
  rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  search: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  slot: DetailedHTMLFactory<
    SlotHTMLAttributes<HTMLSlotElement>,
    HTMLSlotElement
  >;
  script: DetailedHTMLFactory<
    ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >;
  section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  select: DetailedHTMLFactory<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  source: DetailedHTMLFactory<
    SourceHTMLAttributes<HTMLSourceElement>,
    HTMLSourceElement
  >;
  span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
  strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  style: DetailedHTMLFactory<
    StyleHTMLAttributes<HTMLStyleElement>,
    HTMLStyleElement
  >;
  sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  table: DetailedHTMLFactory<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >;
  template: DetailedHTMLFactory<
    HTMLAttributes<HTMLTemplateElement>,
    HTMLTemplateElement
  >;
  tbody: DetailedHTMLFactory<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  td: DetailedHTMLFactory<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
  textarea: DetailedHTMLFactory<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  tfoot: DetailedHTMLFactory<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  th: DetailedHTMLFactory<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >;
  thead: DetailedHTMLFactory<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  time: DetailedHTMLFactory<
    TimeHTMLAttributes<HTMLTimeElement>,
    HTMLTimeElement
  >;
  title: DetailedHTMLFactory<
    HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  >;
  tr: DetailedHTMLFactory<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >;
  track: DetailedHTMLFactory<
    TrackHTMLAttributes<HTMLTrackElement>,
    HTMLTrackElement
  >;
  u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
  var: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  video: DetailedHTMLFactory<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >;
  wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
  webview: DetailedHTMLFactory<
    WebViewHTMLAttributes<HTMLWebViewElement>,
    HTMLWebViewElement
  >;
}
