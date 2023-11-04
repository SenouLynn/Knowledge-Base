import { render, screen } from "@testing-library/react";

const returnCases = (element: string): TestReturnCases => ({
  renders: () => null,
  hasClass: () => null,
  hasStyle: () => null,
  hasValue: () => null,
  hasAttribute: () => null,
});

const builderParams: TestCaseElements = {
  textElement: (element: string) => {
    return returnCases(element);
  },
  elementRole: returnCases,
  elementTestId: returnCases,
};

const testCase = (builder: (params: TestCaseElements) => void) =>
  builder(builderParams);

export default testCase;

type TestCaseElements = {
  textElement: (query: string) => TestReturnCases;
  elementRole: (query: string) => TestReturnCases;
  elementTestId: (query: string) => TestReturnCases;
};

type TestReturnCases = {
  renders: () => void;
  hasClass: () => void;
  hasStyle: () => void;
  hasValue: () => void;
  hasAttribute: () => void;
};
// factory._testCase((t) => t.textElement("test").renders());
