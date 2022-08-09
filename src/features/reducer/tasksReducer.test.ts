import { waitFor } from "@testing-library/react";
import Task from "../models/Task";
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
    test("Then it should return an array with the tasks sent as a payload", () => {
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

  describe("When called with a delete task action as an argument, with id 1", () => {
    test("Then it should return an array without the task that has the id specified", () => {
      const initialTasks = [
        {
          id: 0,
          name: "",
          done: false,
        },
        {
          id: 1,
          name: "",
          done: false,
        },
      ];

      const deleteCardsAction = {
        type: "tasks@delete",
        payload: 1,
      };

      const result = tasksReducer(initialTasks, deleteCardsAction);
      expect(result).toHaveLength(1);
    });
  });

  describe("When called with an add task action as an argument, with a task as a payload", () => {
    test("Then it should return an array with the added task", () => {
      const initialTasks: Task[] = [];

      const task: Task = {
        id: 0,
        name: "",
        done: false,
      };

      const addCardsAction = {
        type: "tasks@add",
        payload: task,
      };

      const result = tasksReducer(initialTasks, addCardsAction);
      expect(result).toStrictEqual([task]);
    });
  });

  describe("When called with a toggle status task action as an argument, with an id as a payload", () => {
    test("Then it should return the same array having toggled the task status done", async () => {
      const initialTasks: Task[] = [
        {
          id: 0,
          name: "",
          done: true,
        },
        {
          id: 1,
          name: "",
          done: false,
        },
      ];
      const taskId = 1;

      const toggleCardsAction = {
        type: "tasks@toggleStatus",
        payload: taskId,
      };

      const result = tasksReducer(initialTasks, toggleCardsAction);

      await waitFor(() => {
        result.forEach((item) => expect(item.done).toBe(true));
      });
    });
  });

  describe("When called with a edit status task action as an argument, with a task as a payload", () => {
    test("Then it should return the same array having changed the task name", async () => {
      const initialTasks: Task[] = [
        {
          id: 0,
          name: "",
          done: true,
        },
        {
          id: 1,
          name: "",
          done: false,
        },
      ];

      const taskToEdit = {
        id: 0,
        name: "Clean the house",
        done: true,
      };

      const toggleCardsAction = {
        type: "tasks@edit",
        payload: taskToEdit,
      };

      const result = tasksReducer(initialTasks, toggleCardsAction);

      await waitFor(() => {
        expect(result[0].name).toBe("Clean the house");
      });
    });
  });
});
