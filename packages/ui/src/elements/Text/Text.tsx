import Components from "./variants";

export interface TextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: keyof typeof Components;
}

Text.displayName = "Text";

export function Text({ variant, ...rest }: TextProps) {
  const Component = methods.getVariant(variant || "Base");
  return <Component {...rest} />;
}

export const methods = {
  getVariant: (variant: keyof typeof Components) => {
    return Components[variant] || Components["Base"];
  },
};
