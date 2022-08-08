import { createReducer } from "@reduxjs/toolkit";
import Task from "../models/Task";

const initialState: Task = {
  id: 0,
  name: "",
  done: false,
};

const tasksReducer = createReducer<Task>(initialState, (builder) => {
  builder.addDefaultCase((state: Task) => state);
});

export default tasksReducer;
