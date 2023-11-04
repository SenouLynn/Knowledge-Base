import createFactoryElement from "../sematic/factory";

type TextProps = {
  type: "mainHeader" | "header" | "subHeader" | "body" | "caption";
  as: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
