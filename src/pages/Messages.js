import React from 'react'
import RightMessage from '../components/message/RightMessage'
import Sidebar from '../components/sidebar/Sidebar'
import './page styles/messages.css'

const Messages = () => {
  return (

      <div className='main-container'>
        <Sidebar />
        <div className="message-container">
          <div className="message-heading">
            <h3>Messages</h3>
            <div message-heading-icons>
              <p>settings</p>
              <p>message+</p>
            </div>
          </div>
        </div>
        <RightMessage />
      </div>

  )
}

export default Messages
