import Button from "../Button/Button";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <header className="header">
        <h2 className="title">MyTasks</h2>
      </header>

      <main className="main-container">
        <form className="add-task">
          <label htmlFor="add-task__name" className="add-task__label"></label>
          <input type="text" id="add-task__name" className="add-task__name" />
          <Button type="submit" text="Add" />
        </form>

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
      </main>
    </div>
  );
};

export default App;
