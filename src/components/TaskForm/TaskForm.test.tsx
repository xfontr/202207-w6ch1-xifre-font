import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import TaskList from "../TaskList/TaskList";
import TaskForm from "./TaskForm";

describe("Given a TaskForm component", () => {
  describe("When instantiated", () => {
    test("Then it should show an input and a button", () => {
      render(
        <Provider store={store}>
          <TaskForm />
        </Provider>
      );

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When instantiated and the user clicks add a new task", () => {
    test("Then it should add a new task with the input value", async () => {
      const initialTasks = 4;
      const expectedTasks = 5;

      render(
        <Provider store={store}>
          <TaskForm />
          <TaskList />
        </Provider>
      );

      // const input = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: "Add" });
      const tasks = screen.getAllByRole("article");

      expect(tasks).toHaveLength(initialTasks);

      fireEvent.click(button);

      await waitFor(() => {
        const tasksWithNewOne = screen.getAllByRole("article");
        expect(tasksWithNewOne).toHaveLength(expectedTasks);
      });
    });
  });
});
