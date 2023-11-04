import tests from "./tests";
import render from "./render";
import assert from "./assert";

import testCase from "../../lib";

const testUtils = { ...tests, ...render, ...assert, testCase };
export { tests, render, assert, testUtils };
export default testUtils;
