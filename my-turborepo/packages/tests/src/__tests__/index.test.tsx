import tests from "../index";

tests.happyPath("Test factory: happy path :)");

describe("Factory validation", () => {
  const factory = tests;
  it("factory should exist", () => {
    expect(factory).toBeDefined();
  });
  it("factory should have methods", () => {
    expect({ ...factory }).toBeDefined();
  });
});
