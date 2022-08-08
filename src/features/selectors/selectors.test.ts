import { selectAllTasks } from "./selectors";

describe("Given a selectAllTasks component", () => {
  describe("When called with a state as an argument", () => {
    test("Then it should return the same state", () => {
      const task = {
        tasks: [
          {
            id: 1,
            name: "Clean",
            done: false,
          },
        ],
      };

      const result = selectAllTasks(task);

      expect(result).toStrictEqual(task);
    });
  });
});
