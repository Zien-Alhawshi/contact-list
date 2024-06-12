import React, { useState, useEffect } from 'react';
import './ContactList.css';

import ContactData from './ContactData';
const ContactList = () => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    const fetchContacts = async () => {
    const res = await fetch('https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list.json');
    const data = await res.json();
    console.log(data)
    const contactData = [];
    for (const key in data) {
      contactData.push({
        name:data[key].name,
        surname:data[key].surname,
        tel:data[key].tel,
      })
    }
    setContacts(contactData)


  }
  fetchContacts();

},[]);

  return (
    <div className='contact-list'>
      <table>
        <thead>
          <tr>
            <th><p>Profile</p></th>
            <th><p>Name</p></th>
            <th><p>Surname</p></th>
            <th><p>Mobile</p></th>
            <th><p>Actions</p></th>
          </tr>
        </thead>
       <ContactData contacts={contacts} />

      </table>
    </div>
  )
}

export default ContactList