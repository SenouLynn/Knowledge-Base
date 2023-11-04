import elements from "../sematic";

export const TextFactory = ({ tagName }: { tagName: keyof typeof elements }) =>
  elements[tagName];

export const variants = {
  MainHeader: TextFactory({ tagName: "h1" }),
  MainSubHeader: TextFactory({ tagName: "h2" }),
  Header: TextFactory({ tagName: "h3" }),
  SubHeader: TextFactory({ tagName: "h4" }),
  LabelHeader: TextFactory({ tagName: "h5" }),
  LabelSubHeader: TextFactory({ tagName: "h6" }),

  Body: TextFactory({ tagName: "p" }),
  Text: TextFactory({ tagName: "p" }),

  Label: TextFactory({ tagName: "label" }),
};
