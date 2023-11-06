import t from "tests";
import Container from "../Container";

describe("Container Component: QA", () => {
  t.happyPath("Container Component: QA");

  const Component = Container;

  t.testCase("Container has a component constructor", () => {
    expect(Component).toBeDefined();
  });
});
