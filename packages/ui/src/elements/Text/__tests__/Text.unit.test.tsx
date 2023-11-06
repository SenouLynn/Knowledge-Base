import t from "tests";
import { Text } from "../../../index";

describe("Text Component: QA", () => {
  t.happyPath("Text Component: QA");

  const Component = Text;

  t.testCase("Text has a component constructor", () => {
    expect(Component).toBeDefined();
  });
});
