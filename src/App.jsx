import React, {useState} from 'react'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes} from 'react-router'
import './styles/App.css';

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route 
            path='/' 
            element={<ContactScreen/>}
            />
        <Route 
            path='/contact/:contact_id/messages' 
            element={<ChatScreen />} 
        />
      </Routes>
     
      
    
    </div>
  )
}

export default App

