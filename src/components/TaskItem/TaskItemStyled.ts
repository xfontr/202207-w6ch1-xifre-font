import styled from "styled-components";

const TaskItemStyled = styled.li`
  padding: var(--container-padding--small);
  border-radius: var(--rad-border--small);
  background-color: var(--secondary-color--low);

  &:hover {
    background-color: var(--secondary-color);
  }

  & .task-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  & .task-name {
    text-decoration: none;
  }

  & .task-name--done {
    text-decoration: line-through;
  }
`;

export default TaskItemStyled;
