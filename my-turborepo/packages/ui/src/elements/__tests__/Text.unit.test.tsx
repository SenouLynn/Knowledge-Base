import t from "tests";
import { runFactoryComponentTests } from "../../utils/componentTests.setup";
t.happyPath("Text Factory");

describe("Running 'Text' factory t: ", () => {
  /** Headers */
  describe("Header Text Components: ", () => {
    runFactoryComponentTests({
      componentName: "MainHeader",
      role: "main-header",
    });
    runFactoryComponentTests({
      componentName: "SubHeader",
      role: "sub-header",
    });
    runFactoryComponentTests({ componentName: "Header", role: "header" });
    runFactoryComponentTests({
      componentName: "LabelHeader",
      role: "label-header",
    });
    runFactoryComponentTests({
      componentName: "LabelSubHeader",
      role: "label-sub-header",
    });
  });

  /** Text */
  describe("Text Components: ", () => {
    runFactoryComponentTests({ componentName: "Label", role: "label" });
    runFactoryComponentTests({ componentName: "Body", role: "body-text" });
    runFactoryComponentTests({ componentName: "Text", role: "text" });
    runFactoryComponentTests({ componentName: "SubText", role: "sub-text" });
  });

  /* Form Text Components */
  describe("Form Text Components: ", () => {
    runFactoryComponentTests({ componentName: "FormText", role: "form-text" });
    runFactoryComponentTests({
      componentName: "FormSubText",
      role: "form-subtext",
    });
    runFactoryComponentTests({
      componentName: "FormHeader",
      role: "form-header",
    });
    runFactoryComponentTests({
      componentName: "FormSubHeader",
      role: "form-subheader",
    });
    runFactoryComponentTests({
      componentName: "FormFooter",
      role: "form-footer-text",
    });

    runFactoryComponentTests({
      componentName: "FormLabel",
      role: "form-label",
    });
    runFactoryComponentTests({
      componentName: "FormSubLabel",
      role: "form-sublabel",
    });
    runFactoryComponentTests({
      componentName: "FormInputLabel",
      role: "form-input-label",
    });
    runFactoryComponentTests({
      componentName: "InputFooter",
      role: "form-input-footer",
    });
    runFactoryComponentTests({
      componentName: "FormInputSubLabel",
      role: "form-input-sub-label",
    });
    runFactoryComponentTests({
      componentName: "InputError",
      role: "form-input-error",
    });
  });
});
