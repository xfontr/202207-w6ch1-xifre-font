import { addTaskActionNew, loadTaskActionNew } from "./actionCreator";

describe("Given a loadTaskActionNew function", () => {
  describe("When instantiated", () => {
    test("Then it should return an object with type 'loadtasks' and an array of tasks as a payload", () => {
      const tasks = [
        {
          id: 1,
          name: "",
          done: false,
        },
      ];

      const expectedResult = {
        type: "tasks@load",
        payload: tasks,
      };

      const result = loadTaskActionNew(tasks);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a addTaskActionNew function", () => {
  describe("When instantiated", () => {
    test("Then it should return an object with type 'addTasks' and a single task as a payload", () => {
      const task = {
        id: 1,
        name: "",
        done: false,
      };

      const expectedResult = {
        type: "tasks@add",
        payload: task,
      };

      const result = addTaskActionNew(task);

      expect(result).toEqual(expectedResult);
    });
  });
});
