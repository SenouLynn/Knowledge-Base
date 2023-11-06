import t from "tests";
import { setupComponentTest } from "../../../utils/componentTests.setup";
import Container from "../Container";
import Components from "../variants";

t.happyPath("Container Factory");

describe("Container variants: QA", () => {
  const { variantTest } = setupComponentTest({
    variants: Components,
    Component: Container,
  });
  /** Headers */
  variantTest({
    variant: "Base",
    role: "box",
  });
  variantTest({
    variant: "Container",
    role: "container",
  });
  variantTest({
    variant: "Box",
    role: "box",
  });
  variantTest({
    variant: "Row",
    role: "row",
  });
  variantTest({
    variant: "Column",
    role: "column",
  });
  variantTest({
    variant: "FlexRow",
    role: "flex-row",
  });
  variantTest({
    variant: "FlexColumn",
    role: "flex-column",
  });
  variantTest({
    variant: "GridRow",
    role: "grid-row",
  });
  variantTest({
    variant: "GridColumn",
    role: "grid-column",
  });
  variantTest({
    variant: "Section",
    role: "section",
  });
  variantTest({
    variant: "Card",
    role: "card",
  });
});
