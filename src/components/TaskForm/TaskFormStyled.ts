import styled from "styled-components";

const TaskFormStyled = styled.form`
  width: 100%;
  padding: var(--container-padding--big);
  background-color: var(--secondary-color);
  border-radius: var(--rad-border--big);
  margin-bottom: var(--container-gap);

  & input {
    background-color: var(--primary-color);
    border-radius: var(--rad-border--small);
    padding: 0.8rem;
    border: none;
    outline: none;
    margin-right: 1rem;
    width: 70%;
  }
`;

export default TaskFormStyled;
