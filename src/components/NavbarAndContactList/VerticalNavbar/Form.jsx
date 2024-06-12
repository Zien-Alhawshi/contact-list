import React, { useState } from 'react';
import './Form.css';
import addnewImage from '../../../assets/add-new.svg';
import Button from '../../Ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { contactListAction } from '../../../store/contact-slice';

const Form = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Dispatch the action to add the contact
    dispatch(contactListAction.addContact(formData));
    // Reset the form data
    setFormData({
      name: '',
      surname: '',
      phone: ''
    });
    console.log('Form submitted:', formData);
  };

  // Initialize state for form data
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: ''
  });

  // Handle input change and update state
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  return (
    <form className='form' onSubmit={onSubmitHandler}>
      <div className='add-new-img'>
        <img src={addnewImage} alt="Add New" />
      </div>
      <div className='input-text'>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={formData.name}
          onChange={inputHandler}
        />
        <input
          type='text'
          name='surname'
          placeholder='surname'
          value={formData.surname}
          onChange={inputHandler}
        />
      </div>
      <div className='input-tel'>
        <input
          type='text'
          name='phone'
          placeholder='7854809325'
          value={formData.phone}
          onChange={inputHandler}
        />
      </div>
      <Button name='Add' />
    </form>
  );
};

export default Form;
