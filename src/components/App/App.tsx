const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h2 className="title">MyTasks</h2>
      </header>

      <main className="main-container">
        <form className="add-task">
          <label htmlFor="add-task__name" className="add-task__label"></label>
          <input type="text" id="add-task__name" className="add-task__name" />
          <button type="submit">Add</button>
        </form>

        <section className="tasks">
          <ul className="task-list">
            <li className="task">
              <article className="task-container">
                <span className="task-name">Task</span>
                <button type="button">Delete</button>
              </article>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
