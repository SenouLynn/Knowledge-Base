import tests from "tests";
import elements from "..";

describe("Run sematic element tests", () => {
  tests.happyPath("Sematic element tests: happy path :)");

  tests.simpleTest({
    label: "Happy path pass through :)",
    chkVal: true,
    run: (chkVal) => chkVal,
    check: (res, chkVal) => expect(res).toBe(chkVal),
  });

  tests.simpleTest({
    label: "Sad path pass through :(",
    chkVal: true,
    run: (chkVal) => !chkVal,
    check: (res, chkVal) => expect(res).not.toBe(chkVal),
  });
});

describe("Elements render", () => {
  const { div } = elements;
  const Component = (props: any) =>
    div({ testarooney: "test" as const, children: props.children });

  it("should as element", () => {
    const Div = () => tests.render(<Component />);
    expect(Div).not.toThrow();
  });
  it("should as wrapper", () => {
    const child = <>child</>;
    const Div = () => tests.render(<Component>{child}</Component>);
    expect(Div).not.toThrow();
    expect(screen)
  });
});
