import tests from "tests";
import finders from "tests/src/factory/finders";
import elements from "../sematic";

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
      finders.findText(stringChild);
    });

    // it.skip(`'${element}'` + " should render correct html element", () => {
    //   const render = () => tests.render(<b></b>);
    //   expect(render).not.toThrow();
    //   // expect(screen.queryByRole(element, { name: /not a link/i })).toBe(null);
    // });

    it(`'${element}'` + " should expose data-testid for external use", () => {
      const render = () => tests.render(<Component data-testid={override} />);
      expect(render).not.toThrow();
      finders.findTestId(override);
    });

    it(`'${element}'` + "should expose role for external use", () => {
      const render = () => tests.render(<Component role={override} />);
      expect(render).not.toThrow();
      finders.findRole(override);
    });

    // it.skip("should expose className for external use", () => {
    //   const render = () => tests.render(<Component className={override} />);
    //   expect(render).not.toThrow();
    //   //   expect(finders.findHtmlElement(override)).toHaveClass(override);
    // });
  });
};

export default runElementTest;
