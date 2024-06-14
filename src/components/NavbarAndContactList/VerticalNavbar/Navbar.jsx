import React, { useEffect, useState } from 'react';
import "./Navbar.css";

const Navbar = ({ fetchTrigger }) => {
    const [totalContacts, setTotalContacts] = useState(0);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch('https://contact-list-app-64308-default-rtdb.firebaseio.com/contact-list.json');
                const data = await res.json();
                
                // Check if data is not null or undefined
                const totalContacts = data ? Object.keys(data).length : 0;
                
                // Set the totalContacts state
                setTotalContacts(totalContacts);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts(); // Call fetchContacts function
    }, [fetchTrigger]);

    return (
        <ul>
            <li>
                <a href='' className='link'>
                    <i className='fa-solid fa-address-book'></i>
                    <div>
                        <h2>All contacts</h2>
                        <p>{totalContacts}</p>
                    </div>
                </a>
            </li>
           
        </ul>
    );
}

export default Navbar;
