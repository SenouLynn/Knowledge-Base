import { testMethod, buildTestComponent } from "../utils/factoryMethod.test.setup";
import finders from "../factory/finders";
import factory from "../..";

describe("factory.finders", () => {
  const { renderComponent, testComponentProps } = buildTestComponent({
    testId: "butts",
    name: "butts",
    text: "butts",
    role: "butts",
  });

  const { findText, findRole, findTestId, findHeaderText } = finders;

  describe("factory.findText method", () => {
    testMethod({
      method: findText,
      render: () => renderComponent(),
      assert: () => {
        const text = findText(testComponentProps.text);
        expect(text).toBeInTheDocument();
      },
    });
  });

  describe("factory.findRole method", () => {
    testMethod({
      method: findRole,
      render: () => renderComponent(),
      assert: () => {
        const role = findRole(testComponentProps.role);
        expect(role).toBeInTheDocument();
      },
    });
  });

  describe("factory.findTestId method", () => {
    testMethod({
      method: findTestId,
      render: () => renderComponent(),
      assert: () => {
        const testId = findTestId(testComponentProps.testId);
        expect(testId).toBeInTheDocument();
      },
    });
  });

  describe("factory.findHeaderText", () => {
    testMethod({
      method: findHeaderText,
      render: () => factory.render(<h1>{testComponentProps.text}</h1>),
      assert: () => {
        const headerText = findHeaderText(testComponentProps.text);
        expect(headerText).toBeInTheDocument();
      },
      cases: [
        {
          name: "should find h1 header text",
          render: () => factory.render(<h1>{testComponentProps.text}</h1>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 1);
            expect(headerText).toBeInTheDocument();
          },
        },
        {
          name: "should find h2 header text",
          render: () => factory.render(<h2>{testComponentProps.text}</h2>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 2);
            expect(headerText).toBeInTheDocument();
          },
        },
        {
          name: "should find h3 header text",
          render: () => factory.render(<h3>{testComponentProps.text}</h3>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 3);
            expect(headerText).toBeInTheDocument();
          },
        },
        {
          name: "should find h4 header text",
          render: () => factory.render(<h4>{testComponentProps.text}</h4>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 4);
            expect(headerText).toBeInTheDocument();
          },
        },
        {
          name: "should find h4 header text",
          render: () => factory.render(<h4>{testComponentProps.text}</h4>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 4);
            expect(headerText).toBeInTheDocument();
          },
        },
        {
          name: "should find h5 header text",
          render: () => factory.render(<h5>{testComponentProps.text}</h5>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 5);
            expect(headerText).toBeInTheDocument();
          },
        },
        {
          name: "should find h6 header text",
          render: () => factory.render(<h6>{testComponentProps.text}</h6>),
          assert: () => {
            const headerText = findHeaderText(testComponentProps.text, 6);
            expect(headerText).toBeInTheDocument();
          },
        },
      ],
    });
  });

  describe("factory.findFormInput", () => {
    testMethod({
      method: finders.findFormInput,
      render: () =>
        factory.render(
          <input
            role="input"
            aria-label={testComponentProps.testId} //aria-label is required for screen.getByRole("input", { name: query }) to work
            name={testComponentProps.testId}
          />
        ),
      assert: () => {
        const labelText = finders.findFormInput(testComponentProps.testId);
        expect(labelText).toBeInTheDocument();
      },
      cases: [
        {
          name: "should find input with label",
          render: () =>
            factory.render(
              <>
                <label htmlFor={testComponentProps.testId}>butts</label>
                <input
                  role="input"
                  aria-label={testComponentProps.testId} //aria-label is required for screen.getByRole("input", { name: query }) to work
                  name={testComponentProps.testId}
                />
              </>
            ),
          assert: () => {
            const labelText = finders.findFormInput(testComponentProps.testId);
            expect(labelText).toBeInTheDocument();
          },
        },
      ],
    });
  });
});
