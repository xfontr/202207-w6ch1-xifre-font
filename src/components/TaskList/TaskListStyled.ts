import styled from "styled-components";

const TaskListStyled = styled.section`
  padding: var(--container-padding--big);

  background-color: var(--secondary-color--low);
  border: 1px solid var(--secondary-color);
  border-radius: var(--rad-border--big);

  backdrop-filter: blur(2px);
  overflow-y: scroll;
  height: 90vh;

  &::-webkit-scrollbar {
    display: none;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: var(--container-gap);
  }
`;

export default TaskListStyled;
