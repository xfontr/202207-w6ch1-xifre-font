import Button from "../Button/Button";
import TaskFormStyled from "./TaskFormStyled";

const TaskForm = (): JSX.Element => {
  return (
    <TaskFormStyled className="add-task">
      <label htmlFor="add-task__name" className="add-task__label"></label>
      <input type="text" id="add-task__name" className="add-task__name" />
      <Button type="submit" text="Add" />
    </TaskFormStyled>
  );
};

export default TaskForm;
