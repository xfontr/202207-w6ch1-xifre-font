import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When instantiated", () => {
    test("Then it should show a task", () => {
      render(<TaskList />);

      const tasks = screen.getAllByRole("article", { name: "" });

      tasks.forEach((task) => expect(task).toBeInTheDocument());
    });
  });
});
