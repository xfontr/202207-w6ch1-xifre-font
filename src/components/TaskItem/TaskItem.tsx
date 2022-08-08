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

  const deleteTask = () => {
    dispatch(deleteTaskActionNew(task.id));
  };

  const toggleStatus = () => {
    dispatch(toggleTaskStatusActionNew(task.id));
  };

  return (
    <TaskItemStyled>
      <article className="task-container" onClick={toggleStatus}>
        <span className={`task-name${task.done ? " task-name--done" : ""}`}>
          {task.name}
        </span>
        <Button type="button" text="Delete" action={deleteTask} />
      </article>
    </TaskItemStyled>
  );
};

export default TaskItem;
