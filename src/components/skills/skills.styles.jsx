import styled from 'styled-components';

export const SkillsContainer = styled.section`
  align-items: flex-start;
  flex-direction: column;
  scroll-margin-top: 3rem;
  background-color: var(--primary-color);
`;

export const SkillsText = styled.header`
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

export const SkillsBody = styled.div`
  padding: 0 15vw;
  font-size: 20px;
  text-align: center;
  margin-bottom: 2%;

  img {
    align-self: center;
    width: 15vw;
  }
`;

export const SkillsList = styled.ul`
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
  list-style-type: none;
  margin-bottom: 10%;
`;

export const ResumeLink = styled.a`
  padding-bottom: 20px;
`;
