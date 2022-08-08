import { RootState } from "../../app/store";
import Task from "../models/Task";

export const selectAllTasks = (state: RootState): { tasks: Task[] } => state;
