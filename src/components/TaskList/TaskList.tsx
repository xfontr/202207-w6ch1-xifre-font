import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestRepository from "../../app/repositories/rest.repository";
import { loadTaskActionNew } from "../../features/actionCreator/actionCreator";
import Task from "../../features/models/Task";
import { selectAllTasks } from "../../features/selectors/selectors";
import TaskItem from "../TaskItem/TaskItem";
import TaskListStyled from "./TaskListStyled";

const url = "http://localhost:3000/posts";

const TaskList = () => {
  const dispatch = useDispatch();
  const repoTasks = useMemo(() => new RestRepository<Task, Response>(url), []);

  useEffect(() => {
    repoTasks.loadAll().then((tasks) => dispatch(loadTaskActionNew(tasks)));
  }, [dispatch, repoTasks]);

  const { tasks: taskList } = useSelector(selectAllTasks);

  return (
    <TaskListStyled>
      <span className="info-tag">Press double click to edit.</span>
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
