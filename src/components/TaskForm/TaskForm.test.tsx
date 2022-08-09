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
import { deleteTaskActionNew } from "../../features/actionCreator/actionCreator";
import { selectAllTasks } from "../../features/selectors/selectors";
import TaskList from "../TaskList/TaskList";
import TaskForm from "./TaskForm";
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

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
      const initialTasks = 1;
      const expectedTasks = 2;

      render(
        <Provider store={store}>
          <TaskForm />
          <TaskList />
        </Provider>
      );

      let button: HTMLButtonElement;
      let tasks: HTMLElement[] = [];

      button = screen.getByRole("button", { name: "Add" });
      tasks = screen.getAllByRole("article");

      expect(tasks).toHaveLength(initialTasks);

      fireEvent.click(button);

      await waitFor(() => {
        const tasksWithNewOne = screen.getAllByRole("article");
        expect(tasksWithNewOne).toHaveLength(expectedTasks);
      });
    });
  });

  describe("When the user inputs a text and adds the task", () => {
    test("Then the said text should be displayed in the task", async () => {
      const newInput = "Gym";
      render(
        <Provider store={store}>
          <TaskForm />
          <TaskList />
        </Provider>
      );

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: "Add" });

      fireEvent.change(input, { target: { value: newInput } });
      fireEvent.click(button);
      const newTask = screen.getByText(newInput);

      await waitFor(() => {
        expect(newTask).toBeInTheDocument();
      });
    });
  });

  describe("When the user inputs no text and adds the task", () => {
    test("Then a default text of 'Press double click edit this task' should be displayed in the task", async () => {
      const newInput = "";
      const expectedText = "Press double click edit this task";

      render(
        <Provider store={store}>
          <TaskForm />
          <TaskList />
        </Provider>
      );

      const deleteButtons = screen.getAllByRole("button", { name: "Delete" });
      deleteButtons.forEach((button) => {
        fireEvent.click(button);
      });

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: "Add" });

      fireEvent.change(input, { target: { value: newInput } });
      fireEvent.click(button);
      const newTask = screen.getByText(expectedText);

      await waitFor(() => {
        expect(newTask).toBeInTheDocument();
      });
    });
  });

  describe("When the user adds a task and there are no tasks", () => {
    test("Then the new task should have an id of 0", async () => {
      const taskName = "Clean";
      const expectedId = 1;

      render(
        <>
          <TaskForm />
          <TaskList />
        </>,
        { wrapper: Wrapper }
      );

      const input = screen.getByRole("textbox");
      const addButton = screen.getByRole("button", { name: "Add" });

      const {
        result: { current },
      } = renderHook(() => useDispatch(), {
        wrapper: Wrapper,
      });

      const {
        result: {
          current: { tasks: tasksToDelete },
        },
      } = renderHook(() => useSelector(selectAllTasks), {
        wrapper: Wrapper,
      });

      act(() => {
        tasksToDelete.forEach((task) => {
          current(deleteTaskActionNew(task.id));
        });
      });

      const {
        result: {
          current: { tasks },
        },
      } = renderHook(() => useSelector(selectAllTasks), {
        wrapper: Wrapper,
      });

      expect(tasks).toHaveLength(0);

      fireEvent.change(input, { target: { value: taskName } });
      fireEvent.click(addButton);

      const {
        result: {
          current: { tasks: tasksAfterDelete },
        },
      } = renderHook(() => useSelector(selectAllTasks), { wrapper: Wrapper });

      await waitFor(() => {
        expect(tasksAfterDelete[0].id).toBe(expectedId);
      });
    });
  });

  describe("When the user adds a task", () => {
    test("Then the input field should have an empty value on submit", async () => {
      render(
        <Provider store={store}>
          <TaskForm />
          <TaskList />
        </Provider>
      );

      const input: HTMLInputElement = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: "Add" });

      fireEvent.change(input, { target: { value: "Clean" } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(input.value).toBe("");
      });
    });
  });
});
