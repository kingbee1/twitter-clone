import React from 'react'
import RightMessage from '../components/message/RightMessage'
import Sidebar from '../components/sidebar/Sidebar'
import './page styles/messages.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { ForwardToInboxOutlined, MailLockOutlined, SearchOutlined } from '@mui/icons-material';
import danny from '../images/Danny.jpeg'
import hshot1 from '../images/alena.jpg'
import hshot2 from '../images/cottonbro.jpg'

const Messages = () => {
  return (

      <div className='main-container'>
        <Sidebar />
        <div className="message-container">

          <div className="message-heading">
            <h3>Messages</h3>
            <div message-heading-icons>
              <SettingsIcon fontSize='small' />
              <MailLockOutlined fontSize='small' />
            </div>
          </div>

          <div class="instant-search">
            <div className="instant-search__input-container">
              <SearchOutlined fontSize='small' />
              <input className="instant-search__input" type="text" placeholder="Search Direct Messages" />
            </div>
          </div>

         <div className="message-top">
          <ForwardToInboxOutlined />
          <p>Message requests</p>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={hshot1} alt="avi" />

          </div>
          <div className="dm">
            <p>Alena <span>@alenashre . April 24</span></p>
            <p>Alena reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={hshot2} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>You need to have seen how he treated her. Omo, no be small thing. 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>You need to have seen how he treated her. Omo, no be small thing. 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>You need to have seen how he treated her. Omo, no be small thing. 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Wilson Scott <span>@scotty123455 . April 24</span></p>
            <p>You need to have seen how he treated her. Omo, no be small thing. 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={danny} alt="avi" />
          </div>
          <div className="dm">
            <p>Dollypee <span>@Dollypee . April 24</span></p>
            <p>Dollypee reacted to a Tweet with 😂</p>
          </div>
         </div>



        </div>

        <RightMessage />
      </div>

  )
}

export default Messages
