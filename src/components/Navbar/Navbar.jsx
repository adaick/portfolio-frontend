import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Centralized nav config — easier to maintain
  const navItems = [
    { label: 'home', type: 'internal' },
    { label: 'about', type: 'internal' },
    { label: 'work', type: 'internal' },
    { label: 'skills', type: 'internal' },
    { label: 'contact', type: 'internal' },
    { label: 'My Photography', type: 'external', url: 'https://adaick.darkroom.com/' },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="app__navbar-links">
        {navItems.map(({ label, type, url }) => (
          <li className="app__flex p-text" key={`link-${label}`}>
            <div />
            {type === 'external' ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              <a href={`#${label}`}>{label}</a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {navItems.map(({ label, type, url }) => (
                <li key={label}>
                  {type === 'external' ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setToggle(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <a
                      href={`#${label}`}
                      onClick={() => setToggle(false)}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
