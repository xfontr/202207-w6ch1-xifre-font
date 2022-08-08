import styled from "styled-components";

const TaskItemStyled = styled.li`
  padding: var(--container-padding--small);
  border-radius: var(--rad-border--small);
  background-color: var(--secondary-color--low);

  & .task-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default TaskItemStyled;
