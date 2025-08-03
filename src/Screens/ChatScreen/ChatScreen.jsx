import React, { useState } from 'react'
import {MessagesList} from '../../Components/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import {getContactById} from '../../Services/contactService';
import './ChatScreen.css'

const ChatScreen = () => {

const {contact_id} =   useParams ()

const contact_selected = getContactById (contact_id)

const [messages, setMessages] = useState(contact_selected.messages)

 
    
    


        const deleteMessageById = (message_id) => {
            const new_message_list = messages.filter(message => message.id !== message_id)
            setMessages(new_message_list)

            
        }

        
        const addNewMessage = (newMessage) => {
                setMessages([...messages, newMessage])
            }


            
        
return (
    <div>
        
        {
            messages.length > 0
            &&
             <button  onClick={() => deleteMessageById(messages[0].id)}>Eliminar primer mensaje</button>
        }
        <MessagesList messages={messages} deleteMessageById={deleteMessageById}/>
        <NewMessageForm addNewMessage={addNewMessage}/>
       
    </div>
   
  )
}

export default ChatScreen

