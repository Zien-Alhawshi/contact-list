import React from 'react'
import ContactList from './ContactList/ContactList';
import './NavbarAndContactList.css';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';
import { useState } from 'react';
const NavbarAndContactList = () => {
  const [fetchTrigger, setFetchTrigger] = useState(0); // State to trigger fetching contacts

  return (
    <div className='navbar-and-list'>
      <VerticalNavbar setFetchTrigger={setFetchTrigger} fetchTrigger={fetchTrigger} />
      <ContactList  setFetchTrigger={setFetchTrigger} fetchTrigger={fetchTrigger}/>
    </div>
  )
}

export default NavbarAndContactList