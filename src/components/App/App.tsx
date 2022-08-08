import Button from "../Button/Button";
import TaskForm from "../TaskForm/TaskForm";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <header className="header">
        <h2 className="title">MyTasks</h2>
      </header>

      <main className="main-container">
        <TaskForm />
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
