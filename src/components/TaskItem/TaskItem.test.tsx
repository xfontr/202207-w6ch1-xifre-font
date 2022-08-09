import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import TaskList from "../TaskList/TaskList";
import TaskItem from "./TaskItem";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

describe("Given a Task component", () => {
  describe("When instantiated with a task as a prop", () => {
    test("Then it should show a task", () => {
      const task = {
        id: 1,
        name: "Clean",
        done: true,
      };

      render(
        <Provider store={store}>
          <TaskItem task={task} />
        </Provider>
      );

      const taskItem = screen.getByRole("article", { name: "" });

      expect(taskItem).toBeInTheDocument();
    });
  });

  describe("When pressed all the Delete buttons", () => {
    test("Then it should delete all the task items", async () => {
      render(
        <Provider store={store}>
          <TaskList />
        </Provider>
      );

      const deleteButton = screen.getAllByRole("button", { name: "Delete" });
      const taskItems = screen.getAllByRole("article", { name: "" });

      expect(taskItems).toHaveLength(4);

      deleteButton.forEach((button) => fireEvent.click(button));

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      await waitFor(() => {
        taskItems.forEach((item) => expect(item).not.toBeInTheDocument());
      });
    });
  });

  describe("When double clicking the task name", () => {
    test("Then it should go away and show an input and a 'Ok' button", async () => {
      const task = {
        id: 1,
        name: "Gym",
        done: true,
      };

      render(
        <Provider store={store}>
          <TaskItem task={task} />
        </Provider>
      );

      const editTask = screen.getByText("Gym");

      fireEvent.doubleClick(editTask);

      const inputField: HTMLInputElement = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button", { name: "Ok" });

      expect(inputField).toBeInTheDocument();
      expect(inputField.value).toBe("Gym");
      expect(editTask).not.toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  });
});
