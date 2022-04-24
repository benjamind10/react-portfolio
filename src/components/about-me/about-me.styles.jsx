import styled from 'styled-components';

export const AboutMeContainer = styled.section`
  align-items: flex-start;
  flex-direction: column;
  scroll-margin-top: 3rem;
  background-color: var(--primary-color);
`;

export const AboutMeText = styled.header`
  flex: 1;
  margin-bottom: 50px;
  font-size: 3em;
  align-self: center;
  text-align: center;
  color: var(--fourth-color);

  header {
    margin-right: 10px;
  }
`;

export const AboutMeBody = styled.div`
  padding: 0 15vw;
  font-size: 20px;
  text-align: center;

  img {
    align-self: center;
    width: 15vw;
  }
`;
