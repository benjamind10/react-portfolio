import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 300px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  justify-content: right;

  header {
    text-align: right;
    padding-top: 10%;
    align-self: flex-end;
    margin: 1.5%;
    color: var(--primary-color);
    font-size: 2em;
    line-height: 1.2;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
