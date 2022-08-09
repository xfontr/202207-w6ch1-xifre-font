import styled from "styled-components";

const TaskFormStyled = styled.form`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: var(--container-padding--big);
  background-color: var(--secondary-color);
  border-radius: var(--rad-border--big);
  margin-bottom: var(--container-gap);
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.15);

  & .add-task__name {
    background-color: var(--primary-color);
    border-radius: var(--rad-border--small);
    padding: 0.8rem;
    border: solid 1px transparent;
    outline: none;
    margin-right: 1rem;
    width: 100%;
  }

  & .add-task__name:focus {
    border: solid 1px var(--typography-color);
  }
`;

export default TaskFormStyled;
