import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const factory = {
  render: (ui: React.ReactElement) => {
    return render(ui);
  },
};

export default factory;
