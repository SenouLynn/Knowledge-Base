import elements from "..";
import runElementTest from "../tests";

describe("Base element registry tests", () => {
  const elementRegistry = Object.keys(elements);
  const createElementTest = (params?: any) => ({
    ...params,
  });

  const tests = elementRegistry.map((element) =>
    createElementTest({ element })
  );

  tests.forEach((testCase: any) => {
    runElementTest(testCase.element);
  });
});
