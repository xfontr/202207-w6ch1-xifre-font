import { useDispatch } from "react-redux";
import Task from "../../features/models/Task";
import {
  deleteTaskActionNew,
  editTaskActionNew,
  toggleTaskStatusActionNew,
} from "../../features/actionCreator/actionCreator";
import Button from "../Button/Button";
import TaskItemStyled from "./TaskItemStyled";
import { useState } from "react";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps): JSX.Element => {
  const dispatch = useDispatch();
  const [{ isEdit, userInput }, setEditStatus] = useState({
    isEdit: false,
    userInput: "",
  });

  const removalEffect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const article = event.target.parentElement as HTMLElement;
    const list = article.parentElement as HTMLElement;

    let rotation = 10;

    setInterval(() => {
      rotation += 2;

      list.setAttribute(
        "style",
        `transform: scale(${
          rotation * 0.022
        }) rotateY(${rotation}deg) rotateX(${rotation / 70}deg) rotateZ(-${
          rotation / 15
        }deg);`
      );
    }, 10);
  };

  const deleteTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    removalEffect(event);

    setTimeout(() => {
      dispatch(deleteTaskActionNew(task.id));
    }, 600);
  };

  const toggleStatus = (id: number): void => {
    dispatch(toggleTaskStatusActionNew(id));
  };

  const editTask = (): void => {
    setEditStatus({ isEdit: true, userInput: "" });
  };

  const updateTask = () => {
    dispatch(
      editTaskActionNew({
        id: task.id,
        name: userInput,
        done: !task.done,
      })
    );

    setEditStatus({ isEdit: false, userInput: "" });
  };

  return (
    <TaskItemStyled>
      <article
        className="task-container"
        onClick={() => {
          toggleStatus(task.id);
        }}
      >
        {!isEdit && (
          <span
            className={`task-name${task.done ? " task-name--done" : ""}`}
            onDoubleClick={editTask}
          >
            {task.name}
          </span>
        )}
        {isEdit && (
          <input
            type="text"
            className="add-task__name"
            value={userInput}
            onChange={(event): void => {
              setEditStatus({ isEdit: true, userInput: event.target.value });
            }}
            autoComplete="off"
            placeholder="Task content"
          />
        )}
        <Button
          type="button"
          text={isEdit ? "Edit" : "Delete"}
          action={() => {}}
          eventAction={(event: React.ChangeEvent<HTMLInputElement>) => {
            !isEdit && deleteTask(event);
            isEdit && updateTask();
          }}
        />
      </article>
    </TaskItemStyled>
  );
};

export default TaskItem;
