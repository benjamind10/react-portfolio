import './about.styles.css';

const About = () => {
  return (
    <>
      <div id='about-me' className='about-me'>
        <header className='about-me-text'>About Me</header>
        <div className='about-me-body'>
          <p>
            I'm a full stack developer based in Midlothian, Virginia,
            who enjoys working on any part of the MERN Stack.
            <br />
            My goal is always to write code that is clean, simple, and
            easy to maintain. React, jQuery, and several CSS libraries
            are among my front-end skills. Node.js, Express, MongoDB,
            MYSQL, and GraphQL are some of my back end proficiencies.
            Also well versed in GitHub's version control system.
          </p>
          <br />

          <img
            src={require(`../../assets/avatar.png`)}
            alt='avatar'
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
