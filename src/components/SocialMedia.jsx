import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter />
    </div> */}
    <div>
      <a href="https://www.linkedin.com/in/adarshmallick/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <CiLinkedin aria-hidden="true"  />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/i.adaick/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;