import React, { useState, useEffect } from 'react';
import './ContactList.css';

import ContactData from './ContactData';
const ContactList = ({fetchTrigger,setFetchTrigger}) => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
    const res = await fetch('https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list.json');
    const data = await res.json();
    
    const contactData = [];
    for (const key in data) {
     console.log(key)

      contactData.push({
        key:key,
        name:data[key].name,
        surname:data[key].surname,
        phone:data[key].phone,
      })
    }
    console.log(contactData)
    setContacts(contactData)
    setFetchTrigger(fetchTrigger+1)

  }
  fetchContacts();

},[fetchTrigger]);

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


       <ContactData contacts={contacts} setFetchTrigger={setFetchTrigger} fetchTrigger={fetchTrigger} />

      </table>
    </div>
  )
}

export default ContactList