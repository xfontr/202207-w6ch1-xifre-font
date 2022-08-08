import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { loadTaskActionNew } from "../../features/reducer/actionCreator";
import tasks from "../../utils/tasks";
import Button from "../Button/Button";
import TaskListStyled from "./TaskListStyled";

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTaskActionNew(tasks));
  }, [dispatch]);

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
