import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When instantiated with text 'Hello'", () => {
    test("Then it should show a button with said text content", () => {
      const buttonText = "Hello";

      render(<Button text={buttonText} type="button" action={() => {}} />);
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When clicked", () => {
    test("Then it should be prevent defaulted", () => {
      const buttonText = "Hello";

      render(<Button text={buttonText} type="button" action={() => {}} />);
      const button = screen.getByRole("button", { name: buttonText });
      const preventDefaultEvent = createEvent.click(button);

      fireEvent(button, preventDefaultEvent);

      expect(preventDefaultEvent.defaultPrevented).toBe(true);
    });
  });
});
