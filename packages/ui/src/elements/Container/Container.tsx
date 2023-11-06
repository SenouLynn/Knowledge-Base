import Components from "./variants";

export default function Container({ variant, ...rest }: ContainerProps) {
  const Component = methods.getVariant(variant || "Base");
  return <Component {...rest} />;
}

export const methods = {
  getVariant: (variant: keyof typeof Components) => {
    return Components[variant] || Components["Base"];
  },
};

type ContainerProps = {
  variant?: keyof typeof Components;
};
