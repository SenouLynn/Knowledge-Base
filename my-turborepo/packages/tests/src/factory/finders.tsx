import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const finders = {
  findText: (query: string) => {
    return screen.getByText(query);
  },
  findRole: (query: string) => {
    return screen.getByRole(query);
  },
  findTestId: (query: string) => {
    return screen.getByTestId(query);
  },
  findHeaderText: (query: string, headingType?: 1 | 2 | 3 | 4 | 5 | 6) => {
    return screen.getByRole("heading", { name: query, level: headingType });
  },
  findFormInput: (query: string) => {
    return screen.getByRole("input", { name: query });
  },

  //<--- Untested for now, add factory tests as needed in finders.unit.test.tsx --->//

  //   findLabelText: (query: string) => {
  //     return screen.getByLabelText(query);
  //   },

  //   findFormInputValue: (query: string) => {
  //     return screen.getByDisplayValue(query);
  //   },
  //   findFormLabelText: (query: string) => {
  //     return screen.getByLabelText(query);
  //   },
  //   findFormLabel: (query: string) => {
  //     return screen.getByRole("label", { name: query });
  //   },
  //   findFormCheckbox: (query: string) => {
  //     return screen.getByRole("checkbox", { name: query });
  //   },
  //   findFormCheckboxChecked: (query: string) => {
  //     return screen.getByRole("checkbox", { name: query, checked: true });
  //   },
  //   findFormCheckboxUnchecked: (query: string) => {
  //     return screen.getByRole("checkbox", { name: query, checked: false });
  //   },
  //   findFormRadio: (query: string) => {
  //     return screen.getByRole("radio", { name: query });
  //   },
  //   findFormRadioChecked: (query: string) => {
  //     return screen.getByRole("radio", { name: query, checked: true });
  //   },
  //   findFormRadioUnchecked: (query: string) => {
  //     return screen.getByRole("radio", { name: query, checked: false });
  //   },
  //   findFormSelect: (query: string) => {
  //     return screen.getByRole("combobox", { name: query });
  //   },
  //   findDisplayValue: (query: string) => {
  //     return screen.getByDisplayValue(query);
  //   },
  //   findFormSelectOption: (query: string) => {
  //     return screen.getByRole("option", { name: query });
  //   },
  //   findButton: (query: string) => {
  //     return screen.getByRole("button", { name: query });
  //   },
  // findIcon: (query: string) => {
  //   return screen.getByRole("img", { name: query });
  // },
};

export default finders;
