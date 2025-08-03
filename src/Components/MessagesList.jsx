import React from "react";
import Message from "./Message/Message";
import './MessageList.css'


const MessagesList = ({messages, deleteMessageById}) => {
  if(messages.length === 0) {
    return (
      <div className="chat-date-lebel-container">
          <span className="chat-date-label">Hoy</span>
      </div>
          
        )
  }
  
  const lista_mensajes = messages.map((message) =>(
       <Message
        key={message.id}
        emisor={message.emisor}
        hora={message.hora}
        id={message.id}
        texto={message.texto||message.text}
        status={message.status}

        deleteMessageById={deleteMessageById}
        />
  ));
    
  
  return (
    <div>
    
      {lista_mensajes}
      </div>
    
  )

}


export  {MessagesList};


