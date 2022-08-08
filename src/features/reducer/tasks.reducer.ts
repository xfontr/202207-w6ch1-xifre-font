import { createReducer } from "@reduxjs/toolkit";
import Task from "../models/Task";
import actionTypes from "./actionTypes";

const initialState: Task[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

const tasksReducer = createReducer<Task[]>(initialState, (builder) => {
  builder.addCase(actionTypes.load, (state: Task[], action: any) => [
    ...action.payload,
  ]);

  builder.addCase(actionTypes.delete, (state: Task[], action: any) =>
    state.filter((task) => task.id !== action.payload)
  );

  builder.addCase(actionTypes.add, (state: Task[], action: any) => [
    ...state,
    action.payload,
  ]);

  builder.addDefaultCase((state: Task[]) => [...state]);
});

export default tasksReducer;
