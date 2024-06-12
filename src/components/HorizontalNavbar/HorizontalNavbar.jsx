import React from 'react'
import Button from '../Ui/Button';
import './HorizontalNavbar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HorizontalNavbar = () => {
  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <div className='profile-img-box'>
          <FontAwesomeIcon className='fa-solid' icon={faUser} />

        </div>
        <h2>John Wan</h2>
      </div>
      <form className='search-box'>
        <input type='text' placeholder='John Wan' />
        <Button name='Search' />
      </form>
    </div>
  )
}

export default HorizontalNavbar