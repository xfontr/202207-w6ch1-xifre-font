import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading 'MyTasks'", () => {
      const heading = "MyTasks";
      render(<App />);

      const element = screen.getByRole("heading", { name: heading });

      expect(element).toBeInTheDocument();
    });
  });
});
