import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handldeSubmitSendMessageForm = (event) => {
       event.preventDefault();
       let new_message_text = event.target.message.value;
       
       const nuevoMensaje = {
        id: Date.now(),
        text: new_message_text,
        emisor: 'YO',
        hora: new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}),
        status:'enviado'
       };
       
       addNewMessage(nuevoMensaje);
       event.target.message.value = '';

  };

    return (
        <form className ="new-message-form" onSubmit= {handldeSubmitSendMessageForm}>
            <div className="input-container">
               <input 
                type= 'text' 
                placeholder='Escribe un mensaje'
                id='message' 
                name='message' 
                required />
            </div>
            
        </form>
    );
};

export default NewMessageForm   
    


