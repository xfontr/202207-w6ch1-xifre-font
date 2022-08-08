import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When instantiated", () => {
    test("Then it should show a task", () => {
      render(
        <Provider store={store}>
          <TaskList />
        </Provider>
      );

      const tasks = screen.getAllByRole("article", { name: "" });

      tasks.forEach((task) => expect(task).toBeInTheDocument());
    });
  });
});
