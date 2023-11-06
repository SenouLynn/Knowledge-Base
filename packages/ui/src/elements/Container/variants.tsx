import { buildElement } from "../../sematic";

export const createComponentProps = () => {};
export const buildComponent = ({
  element,
  role,
}: {
  element: Function;
  role: string;
}) => {
  return (props: any) => {
    return element({ role, ...props });
  };
};

const Components = {
  Base: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "box",
  }),
  Container: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "container",
  }),
  Box: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "box",
  }),
  Row: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "row",
  }),
  Column: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "column",
  }),
  FlexRow: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "flex-row",
  }),
  FlexColumn: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "flex-column",
  }),
  GridRow: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "grid-row",
  }),
  GridColumn: buildComponent({
    element: buildElement({ tagName: "div" }),
    role: "grid-column",
  }),
  Section: buildComponent({
    element: buildElement({ tagName: "section" }),
    role: "section",
  }),
  Card: buildComponent({
    element: buildElement({ tagName: "section" }),
    role: "card",
  }),
};

export default Components;
