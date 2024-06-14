// src/store/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    surname: '',
    phone: ''
  },
  contacts: [] // Initialize contacts as an empty array
};

const contactSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action) => {
      const userData = action.payload;
      fetch('https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }).catch(error => {
        console.log(error);
      });
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      fetch(`https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list/${id}.json`, {
        method: 'DELETE'
      }).catch(error => {
        console.log(error);
      });

      state.contacts = state.contacts.filter(contact => contact.key !== id);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      fetch(`https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedContact)
      }).catch(error => {
        console.log(error);
      });

      const existingContact = state.contacts.find(contact => contact.key === id);
      if (existingContact) {
        existingContact.name = updatedContact.name;
        existingContact.surname = updatedContact.surname;
        existingContact.phone = updatedContact.phone;
      }
    },
    
    
  
  }
});

export const contactListAction = contactSlice.actions;
export default contactSlice;
