import styled from 'styled-components';

export const ContactMeContainer = styled.section`
  background-color: var(--primary-color);

  a {
    color: var(--tertiary-color);
  }
`;

export const ContactContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  justify-items: center;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;

  h3 {
    padding-top: 10px;
    text-decoration: underline;
    font-size: 1.3em;
    text-align: center;
  }

  img {
    width: 2.5vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
