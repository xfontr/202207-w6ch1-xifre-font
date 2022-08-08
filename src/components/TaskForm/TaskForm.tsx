import Button from "../Button/Button";

const TaskForm = (): JSX.Element => {
  return (
    <form className="add-task">
      <label htmlFor="add-task__name" className="add-task__label"></label>
      <input type="text" id="add-task__name" className="add-task__name" />
      <Button type="submit" text="Add" />
    </form>
  );
};

export default TaskForm;
