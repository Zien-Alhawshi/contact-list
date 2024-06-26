import React from 'react';
import './HorizontalNavbar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HorizontalNavbar = () => {
  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <div className='profile-img-box'>
          <FontAwesomeIcon className='fa-user-icon' icon={faUser} />
        </div>
        <h2>John Wan</h2>
      </div>
    </div>
  );
}

export default HorizontalNavbar;
