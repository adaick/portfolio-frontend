import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
import { CiLinkedin, BsInstagram } from "react-icons/ci";

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter />
    </div> */}
    <div>
      <a href="https://www.linkedin.com/in/adarshmallick/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
      <CiLinkedin />
    </div>
    <div>
      <a href="https://www.instagram.com/i.adaick/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"></a>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;