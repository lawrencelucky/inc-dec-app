import React from 'react';
import './Header.scss';
import sunIcon from '../../assets/icons/sun-icon.svg';
import moonIcon from '../../assets/icons/moon-icon.svg';

const Header = ({ handleMode }) => {
  let classes = 'header fixed-top';
  const localStorageMode = localStorage.getItem('mode');
  let img = <img className='icon' src={moonIcon} alt='moon-icon' />;
  if (localStorageMode === 'true') {
    img = <img className='icon' src={sunIcon} alt='sun-icon' />;
    classes += ' dark';
  }

  return (
    <header className={classes}>
      <div className='header-container'>
        <h2>Increment & Decrement</h2>
        <div onClick={handleMode} className='img-container'>
          {img}
        </div>
      </div>
    </header>
  );
};

export default Header;
