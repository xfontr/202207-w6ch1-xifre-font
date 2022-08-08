import Button from "../Button/Button";
import TaskListStyled from "./TaskListStyled";

const TaskList = () => {
  return (
    <TaskListStyled>
      <ul className="task-list">
        <li className="task">
          <article className="task-container">
            <span className="task-name">Task</span>
            <Button type="button" text="Delete" />
          </article>
        </li>
      </ul>
    </TaskListStyled>
  );
};

export default TaskList;
