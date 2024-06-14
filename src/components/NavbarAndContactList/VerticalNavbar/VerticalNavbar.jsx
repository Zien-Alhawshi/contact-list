import React from 'react'
import Form from './Form';
import Navbar from './Navbar';
import './VerticalNavbar.css';

const VerticalNavbar = ({fetchTrigger}) => {
  return (
    <div className='vertical-nav'>
      <Navbar fetchTrigger={fetchTrigger} />
      <Form/>
    </div>
  )
}

export default VerticalNavbar