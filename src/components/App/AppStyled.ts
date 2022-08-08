import styled from "styled-components";

const AppStyled = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: var(--container-padding--big) 0 var(--container-padding--big) 0;

  & .header {
    margin-bottom: var(--container-gap);
  }

  & .h1 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--contrast-color);
  }
`;

export default AppStyled;
