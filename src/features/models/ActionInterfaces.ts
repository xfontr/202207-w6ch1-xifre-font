import Task from "./Task";

export interface IActionLoad {
  type: string;
  payload: Task[];
}

export interface IActionDelete {
  type: string;
  payload: number;
}

export interface IActionToggle {
  type: string;
  payload: number;
}

export interface IActionAdd {
  type: string;
  payload: Task;
}

export interface IActionEdit {
  type: string;
  payload: Task;
}
