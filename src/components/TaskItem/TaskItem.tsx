import { useDispatch } from "react-redux";
import Task from "../../features/models/Task";
import {
  deleteTaskActionNew,
  toggleTaskStatusActionNew,
} from "../../features/actionCreator/actionCreator";
import Button from "../Button/Button";
import TaskItemStyled from "./TaskItemStyled";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps): JSX.Element => {
  const dispatch = useDispatch();

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

  return (
    <TaskItemStyled>
      <article
        className="task-container"
        onClick={() => {
          toggleStatus(task.id);
        }}
      >
        <span className={`task-name${task.done ? " task-name--done" : ""}`}>
          {task.name}
        </span>
        <Button
          type="button"
          text="Delete"
          action={() => {}}
          eventAction={(event: React.ChangeEvent<HTMLInputElement>) => {
            deleteTask(event);
          }}
        />
      </article>
    </TaskItemStyled>
  );
};

export default TaskItem;
