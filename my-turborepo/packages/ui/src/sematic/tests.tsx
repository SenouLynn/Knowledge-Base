import tests from "tests";
import elements from ".";

const runElementTest = (element: string) => {
  describe(`Running '${element}' factory tests: `, () => {
    const override = "override";

    const Component = (props: any) =>
      elements[element as keyof typeof elements]({
        "data-testid": element,
        ...props,
        children: props.children,
      });

    it(`'${element}'` + " should render as element", () => {
      const render = () => tests.render(<Component data-testid={element} />);
      expect(render).not.toThrow();
    });

    it(`'${element}'` + " should render as wrapper", () => {
      const stringChild = "child";
      const render = () =>
        tests.render(
          <Component data-testid={element}>{stringChild}</Component>
        );
      expect(render).not.toThrow();
      tests.findText(stringChild);
    });

    it(`'${element}'` + " should render correct html element", () => {
      const render = () => tests.render(<Component />);
      expect(render).not.toThrow();
      tests.findHtmlElement(element);
    });

    it(`'${element}'` + " should expose data-testid for external use", () => {
      const render = () => tests.render(<Component data-testid={override} />);
      expect(render).not.toThrow();
      tests.findHtmlElement(override);
    });

    it(`'${element}'` + "should expose role for external use", () => {
      const render = () => tests.render(<Component role={override} />);
      expect(render).not.toThrow();
      tests.findRole(override);
    });

    it.skip("should expose className for external use", () => {
      const render = () => tests.render(<Component className={override} />);
      expect(render).not.toThrow();
      //   expect(tests.findHtmlElement(override)).toHaveClass(override);
    });
  });
};

export default runElementTest;
