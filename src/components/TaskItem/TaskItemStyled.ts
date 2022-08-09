import styled from "styled-components";

const TaskItemStyled = styled.li`
  padding: var(--container-padding--small) var(--container-padding--small)
    var(--container-padding--small) 1.5rem;
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

  & .task-container__id {
    position: absolute;
    left: 2.5%;
    height: 1.65rem;
    width: 1.65rem;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.7;
    font-size: 0.8rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 1px solid var(--contrast-color);
    transition: 1s;
  }

  & .task-container__id:hover {
    opacity: 1;
    transform: rotateX(999deg);
    transition: 5s;
  }
`;

export default TaskItemStyled;
