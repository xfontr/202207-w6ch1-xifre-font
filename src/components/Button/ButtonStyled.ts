import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  border-radius: var(--rad-border--small);
  background-color: var(--contrast-color);
  color: var(--primary-color);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default ButtonStyled;
