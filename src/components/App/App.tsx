import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <header className="header">
        <h1 className="title">MyTasks</h1>
      </header>

      <main className="main-container">
        <TaskForm />
        <TaskList />
      </main>
    </AppStyled>
  );
};

export default App;
