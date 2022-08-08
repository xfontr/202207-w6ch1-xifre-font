import { createAction } from "@reduxjs/toolkit";
import Task from "../models/Task";
import actionTypes from "./actionTypes";

export const loadTaskActionNew = createAction<Task[]>(actionTypes.load);
export const addTaskActionNew = createAction<Task>(actionTypes.add);
