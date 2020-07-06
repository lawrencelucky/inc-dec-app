import React from 'react';
import './Footer.scss';
import githubIcon from '../../assets/icons/github-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';

const Footer = () => {
  let classes = 'icons-container fixed-bottom';
  const localStorageMode = localStorage.getItem('mode');

  if (localStorageMode === 'true') {
    classes += ' dark';
  }
  return (
    <footer>
      <div className={classes}>
        <a
          href='https://twitter.com/_lawrencelucky'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon' src={twitterIcon} alt='teitter-icon' />
        </a>
        <a
          href='https://github.com/lawrencelucky/inc-dec-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon' src={githubIcon} alt='github-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/lawrence-lucky/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon' src={linkedinIcon} alt='linked-icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
