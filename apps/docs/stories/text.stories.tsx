import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "ui";

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "MainHeader",
        "Header",
        "SubHeader",
        "LabelHeader",
        "LabelSubHeader",
        "Body",
        "Text",
        "SubText",
        "Label",
        "FormText",
        "FormSubText",
        "FormHeader",
        "FormSubHeader",
        "FormFooter",
        "FormLabel",
        "FormSubLabel",
        "FormSubLabelText",
        "FormLabelText",
        "FormFooterText",
        "FormSubHeaderText",
        "FormHeaderText",
        "FormInputLabel",
        "FormInputSubLabel",
        "InputError",
        "InputFooter",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Text {...props}>Hello</Text>,
  name: "Text",
  args: {
    children: "Yee ol' text",
  },
};

export const MainHeader: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "MainHeader",
  args: {
    children: "Main Header Text",
    variant: "MainHeader",
  },
};

export const SubHeader: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "SubHeader",
  args: {
    children: "Sub Header Text",
    variant: "SubHeader",
  },
};

export const Header: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "Header",
  args: {
    children: "Header Text",
    variant: "Header",
  },
};

export const LabelHeader: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "LabelHeader",
  args: {
    children: "Label Header Text",
    variant: "LabelHeader",
  },
};

export const LabelSubHeader: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "LabelSubHeader",
  args: {
    children: "Label Sub Header Text",
    variant: "LabelSubHeader",
  },
};

export const Body: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "Body",
  args: {
    children: "Body Text",
    variant: "Body",
  },
};

export const SubText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "SubText",
  args: {
    children: "Sub Text",
    variant: "SubText",
  },
};

export const Label: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "Label",
  args: {
    children: "Label",
    variant: "Label",
  },
};

export const FormText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormText",
  args: {
    children: "Form Text",
    variant: "FormText",
  },
};

export const FormSubText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormSubText",
  args: {
    children: "Form Sub Text",
    variant: "FormSubText",
  },
};

export const FormHeader: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormHeader",
  args: {
    children: "Form Header Text",
    variant: "FormHeader",
  },
};

export const FormSubHeader: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormSubHeader",
  args: {
    children: "Form Sub Header Text",
    variant: "FormSubHeader",
  },
};

export const FormFooter: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormFooter",
  args: {
    children: "Form Footer Text",
    variant: "FormFooter",
  },
};

export const FormLabel: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormLabel",
  args: {
    children: "Form Label Text",
    variant: "FormLabel",
  },
};

export const FormSubLabel: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormSubLabel",
  args: {
    children: "Form Sub Label Text",
    variant: "FormSubLabel",
  },
};

export const FormSubLabelText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormSubLabelText",
  args: {
    children: "Form Sub Label Text",
    variant: "FormSubLabelText",
  },
};

export const FormLabelText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormLabelText",
  args: {
    children: "Form Label Text",
    variant: "FormLabelText",
  },
};

export const FormFooterText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormFooterText",
  args: {
    children: "Form Footer Text",
    variant: "FormFooterText",
  },
};

export const FormSubHeaderText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormSubHeaderText",
  args: {
    children: "Form Sub Header Text",
    variant: "FormSubHeaderText",
  },
};

export const FormHeaderText: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormHeaderText",
  args: {
    children: "Form Header Text",
    variant: "FormHeaderText",
  },
};

export const FormInputLabel: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormInputLabel",
  args: {
    children: "Form Input Label Text",
    variant: "FormSubHeader",
  },
};

export const FormInputSubLabel: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "FormInputSubLabel",
  args: {
    children: "Form Input Sub Label Text",
    variant: "FormInputSubLabel",
  },
};

export const InputError: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "InputError",
  args: {
    children: "Input Error Text",
    variant: "InputError",
  },
};

export const InputFooter: Story = {
  render: (props) => <Text {...props}>{props.children}</Text>,
  name: "InputFooter",
  args: {
    children: "Input Footer Text",
    variant: "InputFooter",
  },
};
