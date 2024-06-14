import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faHeart, faUser, faSave } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { contactListAction } from "../../../store/contact-slice";
import { useState } from "react";
import './ContactData.css'; // Ensure this is imported for styling

const ContactData = ({contacts, fetchTrigger,setFetchTrigger}) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(null);
    const [editFormData, setEditFormData] = useState({
      name: '',
      surname: '',
      phone: ''
    });

    const handleDeleteContact = (key) => {
        console.log("Delete contact with id:", key);

        // Dispatch an action to delete the contact from Redux state
        dispatch(contactListAction.deleteContact(key));
        setFetchTrigger(fetchTrigger+1); // Trigger fetching contacts

        // Send a request to delete the contact from Firebase
    };

    const handleEditClick = (contact) => {
        setEditMode(contact.key);
        setEditFormData({
          name: contact.name,
          surname: contact.surname,
          phone: contact.phone
        });
    };

    const handleSaveClick = (id) => {
        console.log("edited!")
        dispatch(contactListAction.editContact({ id, updatedContact: editFormData }));
        setFetchTrigger(fetchTrigger + 1);
        setEditMode(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
          ...editFormData,
          [name]: value
        });
    };
 
    return (
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.key}>
              <td>
                <div className='profile-img-box'>
                <FontAwesomeIcon className='fa-user-icon' icon={faUser} />
                </div>
       
              </td>
              {editMode === contact.key ? (
                <>
                  <td><input type="text" name="name" value={editFormData.name} onChange={handleInputChange} className="input-edit" /></td>
                  <td><input type="text" name="surname" value={editFormData.surname} onChange={handleInputChange} className="input-edit" /></td>
                  <td><input type="text" name="phone" value={editFormData.phone} onChange={handleInputChange} className="input-edit" /></td>
                </>
              ) : (
                <>
                  <td><h2>{contact.name}</h2></td>
                  <td><h2>{contact.surname}</h2></td>
                  <td><h2>{contact.phone}</h2></td>
                </>
              )}
              <td>
                <div>
                  {editMode === contact.key ? (
                    <FontAwesomeIcon className='fa-solid' icon={faSave} onClick={() => handleSaveClick(contact.key)} />
                  ) : (
                    <FontAwesomeIcon className='fa-solid' icon={faPen} onClick={() => handleEditClick(contact)} />
                  )}
                  <FontAwesomeIcon className='fa-solid' icon={faTrash} onClick={() => handleDeleteContact(contact.key)} />
                         
                    </div>
              </td>
            </tr>
          ))}
        </tbody>
    );
};

export default ContactData;
