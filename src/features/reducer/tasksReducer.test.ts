import tasksReducer from "./tasks.reducer";

describe("Given a tasksReducer function", () => {
  describe("When called with an unknown action as an argument", () => {
    test("Then it should return the same list of initial tasks", () => {
      const initialTasks = [
        {
          id: 1,
          name: "",
          done: false,
        },
      ];

      const unknownAction = {
        type: "",
      };

      const result = tasksReducer(initialTasks, unknownAction);

      expect(result).toStrictEqual(initialTasks);
    });
  });

  describe("When called with a load tasks action as an argument", () => {
    test("Then it should return an array with the cards sent as a payload", () => {
      const initialTasks = [
        {
          id: 1,
          name: "",
          done: false,
        },
      ];

      const loadTasksAction = {
        type: "tasks@load",
        payload: initialTasks,
      };

      const result = tasksReducer(initialTasks, loadTasksAction);

      expect(result).toStrictEqual(initialTasks);
    });
  });
});
