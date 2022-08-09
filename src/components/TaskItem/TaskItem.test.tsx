import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../app/store";
import { addTaskActionNew } from "../../features/actionCreator/actionCreator";
import { selectAllTasks } from "../../features/selectors/selectors";
import TaskList from "../TaskList/TaskList";
import TaskItem from "./TaskItem";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

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

      const taskName = screen.getByText(task.name);
      const taskId = screen.getByText(task.id);

      expect(taskName).toBeInTheDocument();
      expect(taskId).toBeInTheDocument();
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

  describe("When double clicking the task name and submiting an edited name", () => {
    test("Then it should display again the task with the new name", async () => {
      const task = {
        id: 10,
        name: "Gym",
        done: true,
      };

      const {
        result: { current: dispatch },
      } = renderHook(() => useDispatch(), {
        wrapper: Wrapper,
      });

      act(() => {
        dispatch(addTaskActionNew(task));
      });

      const newTaskName = "Footing";

      render(<TaskItem task={task} />, { wrapper: Wrapper });

      const editTask = screen.getByText("Gym");
      fireEvent.doubleClick(editTask);

      const inputField: HTMLInputElement = screen.getByRole("textbox");
      fireEvent.change(inputField, { target: { value: newTaskName } });

      expect(inputField.value).toBe(newTaskName);

      const submitButton = screen.getByRole("button", { name: "Ok" });
      fireEvent.click(submitButton);

      const {
        result: {
          current: { tasks },
        },
      } = renderHook(() => useSelector(selectAllTasks), { wrapper: Wrapper });

      expect(inputField).not.toBeInTheDocument();
      expect(submitButton.textContent).toBe("Delete");

      render(<TaskItem task={tasks[0]} />, { wrapper: Wrapper });

      const modifiedTask = screen.getByText(newTaskName);
      expect(modifiedTask).toBeInTheDocument();
    });
  });
});
