import { buildElement } from "../sematic";

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
  MainHeader: buildComponent({
    element: buildElement({ tagName: "h1" }),
    role: "main-header",
  }),
  SubHeader: buildComponent({
    element: buildElement({ tagName: "h2" }),
    role: "sub-header",
  }),
  Header: buildComponent({
    element: buildElement({ tagName: "h3" }),
    role: "header",
  }),
  LabelHeader: buildComponent({
    element: buildElement({ tagName: "h4" }),
    role: "label-header",
  }),
  LabelSubHeader: buildComponent({
    element: buildElement({ tagName: "h5" }),
    role: "label-sub-header",
  }),
  Body: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "body-text",
  }),
  Text: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "text",
  }),
  SubText: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "sub-text",
  }),
  Label: buildComponent({
    element: buildElement({ tagName: "label" }),
    role: "label",
  }),
  FormText: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "form-text",
  }),
  FormSubText: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "form-subtext",
  }),
  FormHeader: buildComponent({
    element: buildElement({ tagName: "h2" }),
    role: "form-header",
  }),
  FormSubHeader: buildComponent({
    element: buildElement({ tagName: "h3" }),
    role: "form-subheader",
  }),
  FormFooter: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "form-footer-text",
  }),
  FormLabel: buildComponent({
    element: buildElement({ tagName: "h5" }),
    role: "form-label",
  }),
  FormSubLabel: buildComponent({
    element: buildElement({ tagName: "h6" }),
    role: "form-sublabel",
  }),
  FormInputLabel: buildComponent({
    element: buildElement({ tagName: "label" }),
    role: "form-input-label",
  }),
  FormInputSubLabel: buildComponent({
    element: buildElement({ tagName: "label" }),
    role: "form-input-sub-label",
  }),
  InputError: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "form-input-error",
  }),
  InputFooter: buildComponent({
    element: buildElement({ tagName: "p" }),
    role: "form-input-footer",
  }),
};

export default Components;
