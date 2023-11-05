import t from "tests";
import Components from "../elements/variants.components";

export const runComponentTests = ({
  componentName,
  role,
}: {
  componentName: keyof typeof Components;
  role: string;
}) => {
  describe(`Running '${componentName}' factory tests: `, () => {
    const Component = Components[componentName as keyof typeof Components];
    const chkText = "test";
    t.testCase(`'${componentName}'` + " has a component constructor", () => {
      expect(Component).toBeDefined();
    });

    t.testCase(
      `'${componentName}'` + " should render as element",
      ({ render }) => {
        const res = () => render(<Component />);
        expect(res).not.toThrow();
      }
    );
    t.testCase(
      `'${componentName}'` + " should render as wrapper",
      ({ elementRole, render }) => {
        render(<Component>{chkText}</Component>);
        elementRole(role).renders();
      }
    );
  });
};

export const runFactoryComponentTests = ({
  componentName,
  role,
}: {
  componentName: keyof typeof Components;
  role: string;
}) => {
  runComponentTests({ componentName, role });
};
