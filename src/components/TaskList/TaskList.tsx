import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTaskActionNew } from "../../features/reducer/actionCreator";
import { selectAllTasks } from "../../features/selectors/selectors";
import tasks from "../../utils/tasks";
import Button from "../Button/Button";
import TaskListStyled from "./TaskListStyled";

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTaskActionNew(tasks));
  }, [dispatch]);

  const { tasks: taskList } = useSelector(selectAllTasks);

  return (
    <TaskListStyled>
      <ul className="task-list">
        <li className="task">
          {taskList.map((task) => (
            <article className="task-container">
              <span className="task-name">{task.name}</span>
              <Button type="button" text="Delete" />
            </article>
          ))}
        </li>
      </ul>
    </TaskListStyled>
  );
};

export default TaskList;
