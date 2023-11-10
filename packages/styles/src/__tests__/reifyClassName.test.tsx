import t from "tests";
import { buildClassName } from "../factory";
t.happyPath("reifyClassName");

const mockClassNameObj = () => {};

describe("Reify class obj into string", () => {
  it("should return undefined", () => {
    expect(buildClassName(undefined)).toBeUndefined();
  });

  it("should return undefined if passed empty obj", () => {
    expect(buildClassName({})).toBeUndefined();
  });
  it("should consume className", () => {
    expect(buildClassName({ className: "foo" })).toBe("foo");
  });
});
