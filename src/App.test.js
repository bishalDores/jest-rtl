import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCameWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of Change to blue
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // btn enable initially
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorBtn = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});

test("Button is gray when it is disabled and red when it is enabled", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorBtn = screen.getByRole("button");

  // expect the background color to be gray when disabled
  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });

  // expect the background color to be red when enabled
  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCameWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
