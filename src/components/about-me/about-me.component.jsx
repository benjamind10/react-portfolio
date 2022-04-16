import {
  AboutMeContainer,
  AboutMeText,
  AboutMeBody,
} from './about-me.styles.jsx';

const AboutMe = () => {
  return (
    <AboutMeContainer id='about-me'>
      <AboutMeText>About Me</AboutMeText>
      <AboutMeBody className='about-me-body'>
        <p>
          I am a passionate learner when it comes to anything computer
          related. For my 9th birthday, was gifted a Gateway computer
          and I became obsessed with learning how it worked. Ever
          since I’ve have been refining my skills. My experience with
          coding started very early on in the battle.net 1.0 days, I
          love gaming and I got together with a group of developers
          that had programmed chat bots for the community among other
          apps gaming related. I quickly became fascinated with Visual
          Basic and started doing simple debugging for the community.
          As I grew older life took me down a different path and as a
          father of a 9 year old I got back in to coding and dedicated
          a whole year of my life to catch up with all that I missed.
        </p>

        <img src={require(`../../assets/avatar.png`)} alt='avatar' />
      </AboutMeBody>
    </AboutMeContainer>
  );
};

export default AboutMe;
