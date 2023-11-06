import t from "tests";
import { setupComponentTest } from "../../../utils/componentTests.setup";
import Components from "../variants";
import { Text } from "../../../index";
t.happyPath("Text Factory");

describe("Text variants: QA", () => {
  const { variantTest } = setupComponentTest({
    variants: Components,
    Component: Text,
  });

  /** Headers */
  describe("Header Text Components: ", () => {
    variantTest({
      variant: "MainHeader",
      role: "main-header",
    });
    variantTest({
      variant: "SubHeader",
      role: "sub-header",
    });
    variantTest({ variant: "Header", role: "header" });
    variantTest({
      variant: "LabelHeader",
      role: "label-header",
    });
    variantTest({
      variant: "LabelSubHeader",
      role: "label-sub-header",
    });
  });

  /** Text */
  describe("Text Components: ", () => {
    variantTest({ variant: "Label", role: "label" });
    variantTest({ variant: "Body", role: "body-text" });
    variantTest({ variant: "Text", role: "text" });
    variantTest({ variant: "SubText", role: "sub-text" });
  });

  /* Form Text Components */
  describe("Form Text Components: ", () => {
    variantTest({ variant: "FormText", role: "form-text" });
    variantTest({
      variant: "FormSubText",
      role: "form-subtext",
    });
    variantTest({
      variant: "FormHeader",
      role: "form-header",
    });
    variantTest({
      variant: "FormSubHeader",
      role: "form-subheader",
    });
    variantTest({
      variant: "FormFooter",
      role: "form-footer-text",
    });

    variantTest({
      variant: "FormLabel",
      role: "form-label",
    });
    variantTest({
      variant: "FormSubLabel",
      role: "form-sublabel",
    });
    variantTest({
      variant: "FormInputLabel",
      role: "form-input-label",
    });
    variantTest({
      variant: "InputFooter",
      role: "form-input-footer",
    });
    variantTest({
      variant: "FormInputSubLabel",
      role: "form-input-sub-label",
    });
    variantTest({
      variant: "InputError",
      role: "form-input-error",
    });
  });
});
