import tests from "../factory/index";
import { render, screen } from "@testing-library/react";
tests.happyPath("Test factory: happy path :)");

describe("Factory validation", () => {
  const factory = tests;
  it("factory should exist", () => {
    expect(factory).toBeDefined();
  });
  it("factory should have methods", () => {
    expect({ ...factory }).toBeDefined();
  });

  const testMethod = ({
    method,
    render,
    assert,
  }: {
    method: Function;
    render: Function;
    assert: Function;
  }) => {
    it("method should exist", () => {
      expect(method).toBeDefined();
    });
    it("method should be a function", () => {
      expect(typeof method).toBe("function");
    });
    // it("method should not throw", () => {
    //   expect(() => method()).not.toThrow();
    // });
    it("method should pass element tests", () => {
      render();
      assert();
    });
  };

  const buildTestComponent = (params: {
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
      },
    };
  };

  describe("Factory methods", () => {
    const { renderComponent, testComponentProps } = buildTestComponent({
      testId: "butts",
      name: "butts",
      text: "butts",
      role: "butts",
    });

    describe("factory.render method", () => {
      testMethod({
        method: factory.render,
        render: () => renderComponent(),
        assert: () => {
          const testId = screen.getByTestId(testComponentProps.testId);
          expect(testId).toBeInTheDocument();

          const text = screen.getByText(testComponentProps.text);
          expect(text).toBeInTheDocument();

          const role = screen.getByRole(testComponentProps.role);
          expect(role).toBeInTheDocument();
        },
      });
    });

    describe("factory finder methods", () => {
      describe("factory.findText method", () => {
        testMethod({
          method: factory.findText,
          render: () => renderComponent(),
          assert: () => {
            const text = factory.findText(testComponentProps.text);
            expect(text).toBeInTheDocument();
          },
        });
      });
      
      describe.skip("factory.findHtmlElement method", () => {
        testMethod({
          method: factory.findHtmlElement,
          render: () => renderComponent(),
          assert: () => {
            const testId = factory.findHtmlElement(testComponentProps.testId);
            expect(testId).toBeInTheDocument();
          },
        });
      });
      describe("factory.findRole method", () => {
        testMethod({
          method: factory.findRole,
          render: () => renderComponent(),
          assert: () => {
            const role = factory.findRole(testComponentProps.role);
            expect(role).toBeInTheDocument();
          },
        });
      });
    });
  });
});
