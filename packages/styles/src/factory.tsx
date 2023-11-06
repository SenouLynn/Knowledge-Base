import classNames from "classnames/dedupe";

export const buildClass = () => {};
export const translateClassName = (params: Object) => {
  if (Object.keys(params).length === 0) {
    return undefined;
  }
  return classNames(params);
};

export const reifyClassName = (params?: ArgumentArray | {}) => {
  if (!params) {
    return undefined;
  }
  if (Array.isArray(params)) {
    return classNames(params.map((param) => translateClassName(param)));
  }
//   if (Array.isArray(params)) {
//     return classNames(params.map((param) => translateClassName(param)));
//   }
  if (typeof params === "object") {
    return translateClassName(params);
  }

  return undefined;
};

interface ArgumentArray extends Array<string | any> {}
