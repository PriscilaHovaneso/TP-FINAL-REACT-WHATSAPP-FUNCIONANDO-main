import React, { useState} from 'react';
import ContactList from  '../../Components/ContactList/ContactList';
import { getContactList } from '../../Services/contactService';
import { getContactById } from '../../Services/contactService'
import {Search, MessageSquareMore} from 'lucide-react'
import './ContactScreen.css'
import {FaSearch} from 'react-icons/fa'

const staticContacts =[
    {
        id: 1,
        name: 'Harry',
        description: 'jugando quidditch',
        avatar: 'https://static.wikia.nocookie.net/esharrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg',
        lastConnection: 'Ayer',
        connectionStatus: 'offline'
    },

    {
        id: 2,
        name: 'Ron',
        description: 'Tengo hambre',
        avatar: 'https://static.wikia.nocookie.net/the-truth-behind-aurora/images/8/85/Ron_Weasley.jpg',
        lastConnection: '17:36',
        connectionStatus: 'offline'
    }

];



const ContactScreen = () => {
    const contacts =  getContactList()

    const [contactsState, setContactsState] = useState(staticContacts);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredContacts = staticContacts.filter(contact =>
        contact.name.toLowerCase().includes(term.toLowerCase())
    );

    setContactsState(filteredContacts);
};
    
  return (
        <div className="contact-screen">
           <div className="contact-list-container">   
           <div className="contact-header">

              <div className="top-bar"> 
                 <h2 className="contact-title">WhatsApp</h2><MessageSquareMore className="icon"/>
              </div>
            
              <div className ="search-bar">
                  <span className="search-icon"><FaSearch/></span>
                  <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" className="search-input" 
                  value={searchTerm}onChange={handleSearchChange}/>
              </div>
                <div className="contact-icons">
               </div>
            
            <div className="contact-list"></div>
            </div>
       
            <ContactList contacts={contactsState} />
        </div>
        </div>
    );
};

export default ContactScreen;