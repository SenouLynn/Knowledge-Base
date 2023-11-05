import factory from "../../index";

/* Clean this shit up boi. This is a messy rats nest get it under control. */

export const testMethod = ({
  method,
  render,
  assert,
  cases = [],
}: {
  method: Function;
  render: Function;
  assert: Function;
  cases?: {
    name: string;
    assert: Function;
    render?: Function;
  }[];
}) => {
  it("method should exist", () => {
    expect(method).toBeDefined();
  });
  it("method should be a function", () => {
    expect(typeof method).toBe("function");
  });

  it("method should pass base element test", () => {
    render();
    assert();
    return;
  });

  describe("Method should pass all cases: ", () => {
    it("should be happy", () => {
      expect(true).toBe(true);
    });
    cases.forEach((testCase) => {
      it(testCase.name, () => {
        testCase.render ? testCase.render() : render();
        testCase.assert();
      });
    });
  });
};

export const buildTestComponent = (params: {
  Component?: () => JSX.Element;
  testId: string;
  name: string;
  text: string;
  role: string;
}) => {
  const Component =
    params.Component ||
    (() => (
      <div role={params.role} data-testid={params.testId}>
        {params.text}
      </div>
    ));
  return {
    renderComponent: () => {
      return factory.render(<Component />);
    },
    testComponentProps: {
      testId: params.testId,
      name: params.name,
      text: params.text,
      role: params.role,
      "aria-label": params.role,
    },
  };
};
