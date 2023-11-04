import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const factory = {
  render: (ui: React.ReactElement) => {
    return render(ui);
  },
  findText: (query: string) => {
    return screen.getByText(query);
  },
  findHtmlElement: (query: string) => {
    return screen.getByTestId(query);
  },
  findRole: (query: string) => {
    return screen.getByRole(query);
  },
};

export default factory;
