export const buildClassName = (params: ClassNameBuilder) => {
  const className = params.className;
  return [className].join(" ");
};

type ClassNameBuilder = {
  className?: string;
};
