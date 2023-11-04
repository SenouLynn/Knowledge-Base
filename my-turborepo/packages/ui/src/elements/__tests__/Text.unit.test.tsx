import t from "tests";
import { variants } from "../variants";

t.happyPath("Text Factory");

describe("Running 'Text' factory t: ", () => {
  const runElementTest = (element: keyof typeof variants) => {
    const Element = variants[element];
    const chkText = "test";

    it("should render text", () => {
      t.render(<Element>{chkText}</Element>);
      t.testCase((t) => t.textElement(chkText).renders());
    });
  };

  const elementRegistry = ["div"];
  runElementTest("div");
});
