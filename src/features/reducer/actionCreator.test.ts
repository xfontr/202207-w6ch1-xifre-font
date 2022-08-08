import {
  addTaskActionNew,
  deleteTaskActionNew,
  loadTaskActionNew,
  toggleTaskStatusActionNew,
} from "./actionCreator";

describe("Given a loadTaskActionNew function", () => {
  describe("When instantiated", () => {
    test("Then it should return an action with type 'loadtasks' and an array of tasks as a payload", () => {
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
    test("Then it should return an action with type 'addTasks' and a single task as a payload", () => {
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

describe("Given a deleteTaskActionNew function", () => {
  describe("When instantiated with an number as an argument", () => {
    test("Then it should return an action with type 'deleteTasks' and an id as payload", () => {
      const taskId = 1;

      const expectedResult = {
        type: "tasks@delete",
        payload: taskId,
      };

      const result = deleteTaskActionNew(taskId);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a toggleTaskStatusActionNew function", () => {
  describe("When instantiated with an number as an argument", () => {
    test("Then it should return an action with type 'deleteTasks' and an id as payload", () => {
      const taskId = 1;

      const expectedResult = {
        type: "tasks@toggleStatus",
        payload: taskId,
      };

      const result = toggleTaskStatusActionNew(taskId);

      expect(result).toEqual(expectedResult);
    });
  });
});
