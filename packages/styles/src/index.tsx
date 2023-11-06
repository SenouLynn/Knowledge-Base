import classNames from "classnames/dedupe";

const genericClassConstructor = (
  constructor: string,
  value: string | number
) => {
  if (constructor === "className") {
    return {};
  }
  const className = `${constructor}-${value}`;
  return {
    [className]: true,
  };
};

const interim = (params: any) => {
  const constructClasses = Object.entries(params).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        ...genericClassConstructor(key, value),
      };
    },
    {}
  );

  return {
    ...constructClasses,
    [params.className]: params.className,
  };
};

export const buildClass = (params?: BuildClass) => {
  /** If passed a simple string, pass as className */
  if (typeof params === "string") {
    return params;
  }

  /* If passed object */
  if (typeof params === "object") {
    const o = interim(params);
    return classNames(o);
  }

  return undefined;
};

type BuildClass =
  | undefined
  | string
  | {
      className?: string;
    };
