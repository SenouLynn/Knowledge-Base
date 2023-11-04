import { createStrictElement } from "./factory";

const factoryElement = <Types,>({ tagName, ...rest }: BuildElement) =>
  createStrictElement<Types>(tagName);

type ContainerProps = {};
const elements = {
  // img: factoryElement({ tagName: "img" }),
  // input: factoryElement({ tagName: "input" }),
  div: factoryElement<ContainerProps>({ tagName: "div" }),
  span: factoryElement({ tagName: "span" }),
  h1: factoryElement({ tagName: "h1" }),
  h2: factoryElement({ tagName: "h2" }),
  h3: factoryElement({ tagName: "h3" }),
  h4: factoryElement({ tagName: "h4" }),
  h5: factoryElement({ tagName: "h5" }),
  h6: factoryElement({ tagName: "h6" }),
  p: factoryElement({ tagName: "p" }),
  a: factoryElement({ tagName: "a" }),
  button: factoryElement({ tagName: "button" }),
  label: factoryElement({ tagName: "label" }),
  select: factoryElement({ tagName: "select" }),
  form: factoryElement({ tagName: "form" }),
  ul: factoryElement({ tagName: "ul" }),
  li: factoryElement({ tagName: "li" }),
  ol: factoryElement({ tagName: "ol" }),
  // table: factoryElement({ tagName: "table" }),
  // thead: factoryElement({ tagName: "thead" }),
  // tbody: factoryElement({ tagName: "tbody" }),
  // tr: factoryElement({ tagName: "tr" }),
  // th: factoryElement({ tagName: "th" }),
  // td: factoryElement({ tagName: "td" }),

  nav: factoryElement({ tagName: "nav" }),
  header: factoryElement({ tagName: "header" }),
  footer: factoryElement({ tagName: "footer" }),
  aside: factoryElement({ tagName: "aside" }),
  section: factoryElement({ tagName: "section" }),
  article: factoryElement({ tagName: "article" }),
  main: factoryElement({ tagName: "main" }),
  iframe: factoryElement({ tagName: "iframe" }),
  canvas: factoryElement({ tagName: "canvas" }),
  svg: factoryElement({ tagName: "svg" }),
  audio: factoryElement({ tagName: "audio" }),
  video: factoryElement({ tagName: "video" }),
  object: factoryElement({ tagName: "object" }),
  map: factoryElement({ tagName: "map" }),
  time: factoryElement({ tagName: "time" }),
  code: factoryElement({ tagName: "code" }),
  pre: factoryElement({ tagName: "pre" }),
  blockquote: factoryElement({ tagName: "blockquote" }),
  abbr: factoryElement({ tagName: "abbr" }),
  address: factoryElement({ tagName: "address" }),
  cite: factoryElement({ tagName: "cite" }),
  b: factoryElement({ tagName: "b" }),
  strong: factoryElement({ tagName: "strong" }),
  i: factoryElement({ tagName: "i" }),
  em: factoryElement({ tagName: "em" }),
  small: factoryElement({ tagName: "small" }),
  sub: factoryElement({ tagName: "sub" }),
  sup: factoryElement({ tagName: "sup" }),
  samp: factoryElement({ tagName: "samp" }),
};

type BuildElement = { tagName: string; props?: any; children?: any[] };
type SemanticElements = typeof elements;
export default elements;
