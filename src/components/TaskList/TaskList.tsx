import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTaskActionNew } from "../../features/actionCreator/actionCreator";
import { selectAllTasks } from "../../features/selectors/selectors";
import tasks from "../../utils/tasks";
import TaskItem from "../TaskItem/TaskItem";
import TaskListStyled from "./TaskListStyled";

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTaskActionNew(tasks));
  }, [dispatch]);

  const { tasks: taskList } = useSelector(selectAllTasks);

  return (
    <TaskListStyled>
      {taskList.length > 0 && (
        <ul className="task-list">
          {taskList.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </ul>
      )}
      {taskList.length === 0 && <p>There are no tasks.</p>}
    </TaskListStyled>
  );
};

export default TaskList;
