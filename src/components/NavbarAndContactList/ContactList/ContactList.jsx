// import React from 'react'
import './ContactList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const ContactList = () => {
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
        <tbody>
          <tr>
            <td>
              <div className='profile-img-box'>
                {/* <i className='fa-solid fa-user'></i> */}
                <FontAwesomeIcon className='fa-solid' icon={faUser} />

              </div>
            </td>
            <td><h2>John</h2></td>
            <td><h2>Wan</h2></td>
            <td><h2>3847281928</h2></td>
            <td>
              <div>
               
                <FontAwesomeIcon className='fa-solid' icon={faPen} />
                <FontAwesomeIcon className='fa-solid'icon={faTrash} />
                <FontAwesomeIcon className='fa-solid'icon={faHeart} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ContactList