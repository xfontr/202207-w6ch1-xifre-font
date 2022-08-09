import { useDispatch } from "react-redux";
import Task from "../../features/models/Task";
import {
  deleteTaskActionNew,
  editTaskActionNew,
  toggleTaskStatusActionNew,
} from "../../features/actionCreator/actionCreator";
import Button from "../Button/Button";
import TaskItemStyled from "./TaskItemStyled";
import { useMemo, useState } from "react";
import RestRepository from "../../app/repositories/rest.repository";

interface TaskProps {
  task: Task;
}

const url = "http://localhost:3000/posts/";

const TaskItem = ({ task }: TaskProps): JSX.Element => {
  const repoTasks = useMemo(() => new RestRepository<Task>(url), []);
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
      repoTasks.delete(task.id).then(() => {
        dispatch(deleteTaskActionNew(task.id));
      });
    }, 600);
  };

  const toggleStatus = (id: number): void => {
    dispatch(toggleTaskStatusActionNew(id));
    repoTasks.update(task);
  };

  const editTask = (): void => {
    setEditStatus({ isEdit: true, userInput: task.name });
  };

  const updateTask = async () => {
    dispatch(
      editTaskActionNew({
        id: task.id,
        name: userInput ? userInput : task.name,
        done: !task.done,
      })
    );

    setEditStatus({ isEdit: false, userInput: "" });

    await repoTasks.update(task);
  };

  return (
    <TaskItemStyled>
      <article
        className="task-container"
        onClick={() => {
          toggleStatus(task.id);
        }}
      >
        <span className="task-container__id">{task.id}</span>
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
          text={isEdit ? "Ok" : "Delete"}
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
