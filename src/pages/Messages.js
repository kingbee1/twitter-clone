import React from 'react'
import RightMessage from '../components/message/RightMessage'
import Sidebar from '../components/sidebar/Sidebar'
import './page styles/messages.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { ForwardToInboxOutlined, MailLockOutlined, SearchOutlined } from '@mui/icons-material';
import danny from '../images/Danny.jpeg'
import hshot1 from '../images/alena.jpg'
import hshot2 from '../images/cottonbro.jpg'
import hshot3 from '../images/hshot3.png'
import hshot4 from '../images/hshot4.jpg'
import dash from '../images/darshan.jpeg'
import sancho from '../images/sancho.jpeg'
import obong from '../images/obong.jpeg'
import teslim from '../images/teslim.jpeg'

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
            <p>Alena reacted with😂 :You are so pretty </p>
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
            <img src={teslim} alt="avi" />
          </div>
          <div className="dm">
            <p>Dayo <span>@Dayo . April 24</span></p>
            <p>Dayo reacted with 🖕🏼: shut up bitch</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={dash} alt="avi" />
          </div>
          <div className="dm">
            <p>Richard <span>@Richard . April 24</span></p>
            <p>Richard reacted with 🤡</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={obong} alt="avi" />
          </div>
          <div className="dm">
            <p>Berry <span>@Berry . April 24</span></p>
            <p>Berry reacted with ❤️</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={sancho} alt="avi" />
          </div>
          <div className="dm">
            <p>Wallace <span>@Wallace . April 24</span></p>
            <p>Normally, you're not a smart person na. 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={teslim} alt="avi" />
          </div>
          <div className="dm">
            <p>Sean <span>@Sean . April 24</span></p>
            <p>Sean reacted with 🤒</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={hshot2} alt="avi" />
          </div>
          <div className="dm">
            <p>Lucky <span>@Lucky . April 24</span></p>
            <p>You need to have seen how he treated her. Omo, no be small thing. 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={obong} alt="avi" />
          </div>
          <div className="dm">
            <p>Richard <span>@Richard . April 24</span></p>
            <p>Richard reacted with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={dash} alt="avi" />
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
            <p>Scott <span>@Scott . April 24</span></p>
            <p>Scott reacted with 🫵🏽</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={hshot3} alt="avi" />
          </div>
          <div className="dm">
            <p>Jason <span>@Jason . April 24</span></p>
            <p>Jason reacted with 😂</p>
          </div>
         </div>

         <div className="actual-message">
          <div className="user-profilet">
            <img src={hshot4} alt="avi" />
          </div>
          <div className="dm">
            <p>Kings <span>@Kings . April 24</span></p>
            <p>Kings reacted with 👍🏽</p>
          </div>
         </div>



        </div>

        <RightMessage />
      </div>

  )
}

export default Messages
