import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouseUser, faHashtag, faBell, faEnvelope, faBookmark, faUser, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'
import me from '../../images/me.png'


function Sidebar() {
  return (
    
    <div className='left-container'>

      <div className="nav-links">
        <ul className='nav-icons'>
          <a href=""><FontAwesomeIcon icon={faTwitter} className="twii-icon" /> </a>
          <li> <a href="#"><FontAwesomeIcon icon={faHouseUser } className="twii" /></a> Home</li>
          <li> <a href=""><FontAwesomeIcon icon={faHashtag} className="twii"/> </a> Explore</li>
          <li> <a href=""><FontAwesomeIcon icon={faBell} className="twii"/></a> Notifications</li> 
          <li> <a href=""><FontAwesomeIcon icon={faEnvelope} className="twii"/></a> Messages</li>
          <li> <a href=""><FontAwesomeIcon icon={faBookmark} className="twii"/></a> Bookmarks</li>
          <li> <a href=""><FontAwesomeIcon icon={faBookmark} className="twii"/></a> Lists</li>
          <li> <a href=""><FontAwesomeIcon icon={faUser} className="twii"/></a> Profile</li>
          <li> <a href=""><FontAwesomeIcon icon={faCircleDot} className="twii"/></a> More</li>
        </ul>
      </div>
      {/* vibrates when i hover. fix later */}

      <div className="tweet-btn">
        <a href="#">Tweet</a>
      </div>

      <div className="profile-sec">
        <div className="profile-sec-bottom">
          <img src={me} alt="profile" />
          <div class="profile-link">
          <p class="full-name">Abiodun Hodonu</p>
          <p class="user-name">@real_kingbee</p>

        </div>
      </div>

    </div>
  </div>
  )
}

export default Sidebar
