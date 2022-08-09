import styled from "styled-components";

const TaskItemStyled = styled.li`
  padding: var(--container-padding--small);
  border-radius: var(--rad-border--small);
  background-color: var(--secondary-color--low);
  transition: 0.1s;

  &:hover {
    background-color: var(--secondary-color);
  }

  & .task-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  & .task-name::-webkit-scrollbar {
    display: none;
  }

  & .task-name {
    text-decoration: none;
    max-width: 75%;
    overflow-x: scroll;
  }

  & .task-name--done {
    text-decoration: line-through;
  }

  & input {
    background-color: transparent;
    border: 1px solid var(--contrast-color);
    border-width: 0 0 1px 0;
    outline: none;
    width: 75%;
  }
`;

export default TaskItemStyled;
