import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../../features/models/Task";
import { addTaskActionNew } from "../../features/actionCreator/actionCreator";
import { selectAllTasks } from "../../features/selectors/selectors";
import Button from "../Button/Button";
import TaskFormStyled from "./TaskFormStyled";

const TaskForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(selectAllTasks);
  const [userInput, setUserInput] = useState("");

  const createTask = (): Task => {
    const lastId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id;

    return {
      id: lastId + 1,
      name: userInput ? userInput : "Press double click edit this task",
      done: false,
    };
  };

  const addTask = (): void => {
    dispatch(addTaskActionNew(createTask()));
    setUserInput("");
  };

  return (
    <TaskFormStyled className="add-task">
      <label htmlFor="add-task__name" className="add-task__label"></label>
      <input
        type="text"
        id="add-task__name"
        className="add-task__name"
        value={userInput}
        onChange={(event): void => {
          setUserInput(event.target.value);
        }}
        autoComplete="off"
        placeholder="Write a new task"
      />
      <Button type="submit" text="Add" action={addTask} />
    </TaskFormStyled>
  );
};

export default TaskForm;
