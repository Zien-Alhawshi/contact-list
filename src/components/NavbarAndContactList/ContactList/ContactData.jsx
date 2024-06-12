import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { contactListAction } from "../../../store/contact-slice";

const ContactData = (props) => {
    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        console.log("Delete contact with id:", id);
        dispatch(contactListAction.deleteContact(id));
        console.log("Delete!");
    };

    return (
        <tbody>
            {props.contacts.map(contact => (
                <tr key={contact.id}>
                    <td>
                        <div className='profile-img-box'>
                            <FontAwesomeIcon className='fa-solid' icon={faUser} />
                        </div>
                    </td>
                    <td><h2>{contact.name}</h2></td>
                    <td><h2>{contact.surname}</h2></td>
                    <td><h2>{contact.tel}</h2></td>
                    <td>
                        <div>
                            <FontAwesomeIcon className='fa-solid' icon={faPen} />
                            <FontAwesomeIcon className='fa-solid' icon={faTrash} 
                                onClick={() => handleDeleteContact(contact.id)} // Change to contact.id
                            />
                            <FontAwesomeIcon className='fa-solid' icon={faHeart} />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default ContactData;
