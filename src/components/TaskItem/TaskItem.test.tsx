import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

describe("Given a Task component", () => {
  describe("When instantiated with a task as a prop", () => {
    test("Then it should show a task", () => {
      const task = {
        id: 1,
        name: "Clean",
        done: true,
      };

      render(<TaskItem task={task} />);

      const taskItem = screen.getByRole("article", { name: "" });

      expect(taskItem).toBeInTheDocument();
    });
  });
});
