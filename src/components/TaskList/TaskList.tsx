import Button from "../Button/Button";

const TaskList = () => {
  return (
    <section className="tasks">
      <ul className="task-list">
        <li className="task">
          <article className="task-container">
            <span className="task-name">Task</span>
            <Button type="button" text="Delete" />
          </article>
        </li>
      </ul>
    </section>
  );
};

export default TaskList;
