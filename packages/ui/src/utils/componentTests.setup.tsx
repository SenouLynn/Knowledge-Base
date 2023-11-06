import t from "tests";
import Components from "../elements/Text/variants";
import Text from "../elements/Text/Text";

const buildFactoryTest = ({
  componentName,
  componentDict,
}: {
  componentDict: Record<string, React.FC>;
  componentName: string;
}): React.FC => {
  return componentDict[componentName];
};

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
      `'${componentName}'` + "render with children (text) ",
      ({ elementRole, render }) => {
        render(<Component>{chkText}</Component>);
        elementRole(role).renders();
      }
    );

    t.testCase(
      `'${componentName}'` + " should role" + ` '${role}'`,
      ({ elementRole, render }) => {
        render(<Component>{chkText}</Component>);
        elementRole(role).renders();
      }
    );
    t.testCase(
      `Text component renders with variant: '${componentName}'`,
      ({ elementRole, render }) => {
        render(<Text variant={componentName}>{chkText}</Text>);
        elementRole(role).renders();
      }
    );
  });
};
const runVariantTest = ({
  componentName,
  variants,
  Component,
  role,
}: {
  Component: React.FC;
  variants: Record<string, React.FC>;
  componentName: keyof typeof Components;
  role: string;
}) => {
  describe(`Running '${componentName}' factory tests: `, () => {
    const Variant = variants[componentName as keyof typeof Components];
    const chkText = "test";
    t.testCase(`'${componentName}'` + " has a component constructor", () => {
      expect(Component).toBeDefined();
    });

    t.testCase(
      `'${componentName}'` + " should render as element",
      ({ render }) => {
        const res = () => render(<Variant />);
        expect(res).not.toThrow();
      }
    );
    t.testCase(
      `'${componentName}'` + "render with children (text) ",
      ({ elementRole, render }) => {
        render(<Variant>{chkText}</Variant>);
        elementRole(role).renders();
      }
    );

    t.testCase(
      `'${componentName}'` + " should role" + ` '${role}'`,
      ({ elementRole, render }) => {
        render(<Variant>{chkText}</Variant>);
        elementRole(role).renders();
      }
    );
    t.testCase(
      `Text component renders with variant: '${componentName}'`,
      ({ elementRole, render }) => {
        render(<Component variant={componentName}>{chkText}</Component>);
        elementRole(role).renders();
      }
    );
  });
};

export const runFactoryComponentTests = runComponentTests;

export const setupComponentTest = ({
  Component,
  variants,
}: {
  Component: React.FC;
  variants: Record<string, React.FC>;
}) => {
  const variantTest = ({
    variant,
    role,
  }: {
    variant: string;
    role: string;
  }) => {
    runVariantTest({
      Component,
      variants,
      componentName: variant,
      role: role,
    });
  };

  return { variantTest };
};
