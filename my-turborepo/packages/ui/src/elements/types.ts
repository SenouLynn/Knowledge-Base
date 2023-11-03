type GenericElementProps = {
  children?: React.ReactNode;
  // Add any additional props specific to the HTML element here
};

type BaseElement<ComponentProps> = (
  props: ComponentProps & GenericElementProps
) => JSX.Element;

/* If in strict mode, will enforce passed types (V), if not will allow any props */
type ElementPropsFactory<
  T extends "strict" | "loose",
  V = void,
> = T extends "strict" ? V : {};
