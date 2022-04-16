import './contact.styles.scss';

const Contact = () => {
  return (
    <section id='contact-me' class='contact-me'>
      <header class='contact-me-text'>Contact Me:</header>
      <div class='container'>
        <div class='phone'>
          <img
            src={require(`../../assets/tele.jpeg`)}
            alt='telephone icon'
          />
          <h3>201.486.8848</h3>
        </div>
        <div class='email'>
          <a href='mailto:ben@bytebug.io'>
            <img
              src={require(`../../assets/email.png`)}
              alt='email icon'
            />
            <h3>ben@bytebug.io</h3>
          </a>
        </div>
        <div class='github'>
          <a
            href='https://github.com/benjamind10/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require(`../../assets/github.png`)}
              alt='github icon'
            />
            <h3>GitHub</h3>
          </a>
        </div>
        <div class='linkedin'>
          <a
            href='https://www.linkedin.com/in/benjamin-duran-3a880a1b9/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require(`../../assets/linkedin.png`)}
              alt='linkedin icon'
            />
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
