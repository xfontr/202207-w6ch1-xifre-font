import Task from "../../features/models/Task";
import Button from "../Button/Button";
import TaskItemStyled from "./TaskItemStyled";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps): JSX.Element => {
  return (
    <TaskItemStyled>
      <article className="task-container">
        <span className="task-name">{task.name}</span>
        <Button type="button" text="Delete" />
      </article>
    </TaskItemStyled>
  );
};

export default TaskItem;
