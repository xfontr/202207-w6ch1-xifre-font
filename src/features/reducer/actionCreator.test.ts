import { loadTaskActionNew } from "./actionCreator";

describe("Given a loadTaskActionNew function", () => {
  describe("When instantiated", () => {
    test("Then it should return an object with type 'loadtasks' and a payload", () => {
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
