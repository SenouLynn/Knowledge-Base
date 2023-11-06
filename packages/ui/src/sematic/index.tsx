import { createStrictElement } from "./factory";

/* Enforce strict prop types if passed */
const factoryElement = <Types,>({ tagName, ...rest }: BuildElement) =>
  createStrictElement<Types>(tagName);

const elements = {
  // img: factoryElement({ tagName: "img" }),
  // input: factoryElement({ tagName: "input" }),
  div: factoryElement({ tagName: "div" }),
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

export const buildElement = ({
  tagName,
}: {
  tagName: keyof typeof elements;
}) => {
  return elements[tagName];
};
type BuildElement = { tagName: string; props?: any; children?: any[] };
export default elements;
