import React from "react";

/* Root semantic html element creator */
const createFactoryElement = <T,>(tagName: string): Element<T> => {
  return (props) => {
    return React.createElement(tagName, props, props.children);
  };
};

/* Enforces semantic element creation with strict prop types */
export const createStrictElement = <V,>(
  tagName: string
): Element<ElementPropsFactory<"strict", V>> => {
  return createFactoryElement(tagName);
};

/* Open prop typing */
export const createLooseElement = <V,>(
  tagName: string
): Element<ElementPropsFactory<"loose", V>> => {
  return createFactoryElement(tagName);
};

export default createFactoryElement;

type GenericElementProps = {
  children?: React.ReactNode;
  // Add any additional props specific to the HTML element here
};

type Element<ComponentProps> = (
  props: ComponentProps & GenericElementProps
) => JSX.Element;

/* If strict, will enforce passed props "V" */
type ElementPropsFactory<T extends "strict" | "loose", V> = T extends "strict"
  ? V
  : any;
