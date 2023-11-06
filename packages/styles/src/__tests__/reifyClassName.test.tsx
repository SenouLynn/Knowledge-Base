import { reifyClassName } from "../factory";
import t from "tests";

t.happyPath("reifyClassName");

const mockClassNameObj = () => {};

describe("Reify class obj into string", () => {
  it("should return undefined", () => {
    expect(reifyClassName()).toBeUndefined();
  });

  it("should return undefined if passed empty obj", () => {
    expect(reifyClassName({})).toBeUndefined();
  });

  it("should take boolean and return key", () => {
    expect(reifyClassName([{ foo: true }])).toBe("foo");
  });

  it("should two params in obj", () => {
    expect(reifyClassName({ foo: true, bar: true })).toBe("foo bar");
  });

  it("should take two strings in array", () => {
    expect(reifyClassName(["foo", "bar"])).toBe("foo bar");
  });
  it("should take a string and an obj", () => {
    expect(reifyClassName(["foo", { bar: true }])).toBe("foo bar");
  });

  it("should override from latest obj", () => {
    expect(reifyClassName([{ foo: true }, { foo: false, bar: true }])).toBe(
      "bar"
    );
  });
});
