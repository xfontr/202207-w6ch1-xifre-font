import Task from "../../features/models/Task";
import Button from "../Button/Button";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps): JSX.Element => {
  return (
    <li className="task">
      <article className="task-container">
        <span className="task-name">{task.name}</span>
        <Button type="button" text="Delete" />
      </article>
    </li>
  );
};

export default TaskItem;
