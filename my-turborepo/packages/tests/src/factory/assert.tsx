import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

export const assert = {
  existsInDocument: (query: any) => {
    expect(query).toBeInTheDocument();
  },
};

export default assert;
