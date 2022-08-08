import { useDispatch } from "react-redux";
import Task from "../../features/models/Task";
import { deleteTaskActionNew } from "../../features/reducer/actionCreator";
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

  return (
    <TaskItemStyled>
      <article className="task-container">
        <span className="task-name">{task.name}</span>
        <Button type="button" text="Delete" action={deleteTask} />
      </article>
    </TaskItemStyled>
  );
};

export default TaskItem;
