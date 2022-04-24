import pdf from '../../assets/resume.pdf';

import {
  SkillsContainer,
  SkillsBody,
  SkillsText,
  SkillsList,
  ResumeLink,
} from './skills.styles';

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsText>Resume</SkillsText>
      <SkillsBody>
        <ResumeLink href={pdf} download='resume'>
          Click here to download
        </ResumeLink>
      </SkillsBody>
      <br />
      <SkillsText>Proficiencies</SkillsText>
      <SkillsBody>
        <SkillsList>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>ES6+</li>
          <li>MYSQL</li>
          <li>NOSQL</li>
          <li>GraphQL</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>OOP</li>
          <li>Linux</li>
        </SkillsList>
      </SkillsBody>
    </SkillsContainer>
  );
};

export default Skills;
