import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <header className="header">
        <h2 className="title">MyTasks</h2>
      </header>

      <main className="main-container">
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
};

export default App;
