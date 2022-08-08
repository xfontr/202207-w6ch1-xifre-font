import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import App from "./App";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading 'MyTasks'", () => {
      const heading = "MyTasks";
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const element = screen.getByRole("heading", { name: heading });

      expect(element).toBeInTheDocument();
    });
  });
});
