import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './form.styles.css';

const templateId = 'template_z2j00ml';

const Form = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className='form-style-6'>
      <h1>Send Me A Message</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          required
          type='text'
          name='from_name'
          placeholder='Your Name'
        />
        <input
          required
          type='email'
          name='user_email'
          placeholder='Email Address'
        />
        <textarea
          required
          name='message'
          placeholder='Type your Message'
        ></textarea>
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};
export default Form;
