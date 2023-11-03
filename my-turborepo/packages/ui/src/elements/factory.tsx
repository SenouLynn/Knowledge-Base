import React from "react";

const createFactoryElement = <T,>(tagName: string): Element<T> => {
  return (props) => {
    return React.createElement(tagName, props, props.children);
  };
};

/* Enforces types passed to it */
export const createStrictElement = <V,>(
  tagName: string
): Element<ElementPropsFactory<"strict", V>> => {
  return createFactoryElement(tagName);
};

/* Does not enforce types */
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

type ElementPropsFactory<T extends "strict" | "loose", V> = T extends "strict"
  ? V
  : any;
