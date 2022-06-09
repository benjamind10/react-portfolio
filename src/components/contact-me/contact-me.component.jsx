import './contact-me.styles.css';

const Contact = () => {
  return (
    <section id='contact-me' className='contact-me'>
      <header className='contact-me-text'>Contact Me:</header>
      <div className='container'>
        <div className='phone'>
          <img
            src={require(`../../assets/tele.jpeg`)}
            alt='telephone icon'
          />
          <h3>201.486.8848</h3>
        </div>
        <div className='email'>
          <a href='mailto:benjamind10@pm.me'>
            <img
              src={require(`../../assets/email.png`)}
              alt='email icon'
            />
            <h3>benjamind10@pm.me</h3>
          </a>
        </div>
        <div className='github'>
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
        <div className='linkedin'>
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
