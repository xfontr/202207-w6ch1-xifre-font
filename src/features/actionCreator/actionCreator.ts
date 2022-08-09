import { createAction } from "@reduxjs/toolkit";
import Task from "../models/Task";
import actionTypes from "../models/actionTypes";

export const loadTaskActionNew = createAction<Task[]>(actionTypes.load);

export const addTaskActionNew = createAction<Task>(actionTypes.add);

export const deleteTaskActionNew = createAction<number>(actionTypes.delete);

export const toggleTaskStatusActionNew = createAction<number>(
  actionTypes.toggleDoneStatus
);
export const editTaskActionNew = createAction<Task>(actionTypes.edit);
