// src/store/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    surname: '',
    phone: ''
  }
};

const contactSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const userData= action.payload;
      fetch('https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }).catch(error=>{
        console.log(error)
      })
    }
  }
});

export const contactListAction = contactSlice.actions;
export default contactSlice
