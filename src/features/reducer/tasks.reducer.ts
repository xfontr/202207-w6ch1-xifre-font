import { createReducer } from "@reduxjs/toolkit";
import Task from "../models/Task";
import actionTypes from "../models/actionTypes";
import {
  IActionAdd,
  IActionDelete,
  IActionEdit,
  IActionLoad,
  IActionToggle,
} from "../models/ActionInterfaces";

const initialState: Task[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

const tasksReducer = createReducer<Task[]>(initialState, (builder) => {
  builder.addCase(actionTypes.load, (state: Task[], action: IActionLoad) => [
    ...action.payload,
  ]);

  builder.addCase(actionTypes.delete, (state: Task[], action: IActionDelete) =>
    state.filter((task) => task.id !== action.payload)
  );

  builder.addCase(actionTypes.add, (state: Task[], action: IActionAdd) => [
    ...state,
    action.payload,
  ]);

  builder.addCase(
    actionTypes.toggleDoneStatus,
    (state: Task[], action: IActionToggle) =>
      state.map((task) => ({
        ...task,
        done: task.id === action.payload ? !task.done : task.done,
      }))
  );

  builder.addCase(actionTypes.edit, (state: Task[], action: IActionEdit) =>
    state.map((task) => ({
      ...task,
      name: task.id === action.payload.id ? action.payload.name : task.name,
    }))
  );

  builder.addDefaultCase((state: Task[]) => [...state]);
});

export default tasksReducer;
