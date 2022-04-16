import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: var(--tertiary-color);
  padding: 40px 35px;
  justify-content: space-between;
  width: 100%;

  h2 {
    color: var(--primary-color);
    font-size: 1em;
    margin: 0;
    text-align: center;
  }

  div {
    line-height: 1.5;
    text-align: right;
  }
  a {
    color: var(--primary-color);
  }
`;
