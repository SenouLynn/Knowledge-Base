import tests from "./factory/tests";
import render from "./factory/render";

import testCase from "./lib";

const testUtils = { ...tests, ...render, testCase };

export { tests, render, testUtils };
export default testUtils;
