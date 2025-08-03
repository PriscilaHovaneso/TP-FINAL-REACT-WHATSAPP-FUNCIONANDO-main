import React, { useState } from 'react';
import './Message.css'


const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
  const [message_selected, setMessageSelected] = useState(false);

  const handleChangeMessageSelected = (e) => {
    e.preventDefault();
    setMessageSelected(true);
  };

  const isSender = emisor === 'YO';

  return (
    <div
      className={`message-container ${isSender?'sent':'received'} ${message_selected ?'selected':''}`}
      onContextMenu={handleChangeMessageSelected}
     >

      <div className="message-bubble">
        <div className="message-content">
         <p className="message-text">{texto}</p>
         <span className="message-time">{hora}</span>
         </div>
         {message_selected && (
         <button
          className="delete-button" onClick={() => deleteMessageById(id)}>Eliminar</button>
          )}
      </div>
    </div>
  )
}

export default Message

