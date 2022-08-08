import { render, screen } from "@testing-library/react";
import TaskForm from "./TaskForm";

describe("Given a TaskForm component", () => {
  describe("When instantiated", () => {
    test("Then it should show an input and a button", () => {
      render(<TaskForm />);

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
