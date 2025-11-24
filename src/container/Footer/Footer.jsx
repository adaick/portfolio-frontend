// src/container/Footer/Footer.jsx

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  // Use your Formspree form ID here
  const [state, handleSubmit] = useForm('xrbdnrkr');

  // Local state for controlled inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // When Formspree reports success, show thank-you message
  const hasSucceeded = state.succeeded;

  return (
    <>
      <h2 className="head-text">Take a coffee &amp; chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:adarshmallick@gmail.com" className="p-text">
            Email
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+49 17680826117" className="p-text">
            Phone
          </a>
        </div>
      </div>

      {!hasSucceeded ? (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>

          {/* Formspree validation errors (optional but useful) */}
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="p-text"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
