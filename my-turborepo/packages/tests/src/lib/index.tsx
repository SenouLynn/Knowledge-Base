import { render, screen } from "@testing-library/react";
import finders from "../factory/finders";
import factory from "../factory/render";

const returnCases = (element: any): TestReturnCases => ({
  renders: () => expect(element).toBeInTheDocument(),
  hasClass: () => null,
  hasStyle: () => null,
  hasValue: () => null,
  hasAttribute: () => null,
});

const builderParams: TestCaseElements = {
  textElement: (element: string) => {
    const html = finders.findText(element);
    return returnCases(html);
  },
  elementRole: (element: string) => {
    const html = finders.findRole(element);
    return returnCases(html);
  },
  elementTestId: returnCases,
  render: factory.render,
};

const testCase = (name: string, builder: (params: TestCaseElements) => void) =>
  it(name, () => {
    builder(builderParams);
  });

export default testCase;

type TestCaseElements = {
  textElement: (query: string) => TestReturnCases;
  elementRole: (query: string) => TestReturnCases;
  elementTestId: (query: string) => TestReturnCases;
  render: typeof render;
};

type TestReturnCases = {
  renders: () => void;
  hasClass: () => void;
  hasStyle: () => void;
  hasValue: () => void;
  hasAttribute: () => void;
};
// factory._testCase((t) => t.textElement("test").renders());
