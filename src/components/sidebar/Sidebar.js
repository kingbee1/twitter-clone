import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouseUser, faHashtag, faBell, faEnvelope, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import AodIcon from '@mui/icons-material/Aod';
import PendingIcon from '@mui/icons-material/Pending';
import './sidebar.css'
import me from '../../images/me.png'


function Sidebar() {
  return (
    
    <div className='left-container'>

      <div className="nav-links">
        <ul className='nav-icons'>
          <a href=""><FontAwesomeIcon icon={faTwitter} className="twii-icon" /> </a>

          <li ><NavLink className='navlink' to="/"><FontAwesomeIcon icon={faHouseUser} className="twii"/>Home</NavLink></li>
          <li> <a href=""><FontAwesomeIcon icon={faHashtag} className="twii"/> </a> Explore</li>
          <li ><NavLink className='navlink' to="/notification"><FontAwesomeIcon icon={faBell} className="twii"/>Notification</NavLink></li>
          <li> <NavLink className='navlink' to="/messages" ><FontAwesomeIcon icon={faEnvelope} className="twii"/> Messages</NavLink></li>
          <li ><NavLink className='navlink' to="/bookmark"><FontAwesomeIcon icon={faBookmark} className="twii"/>Bookmarks</NavLink></li>
          <li> <a href=""><AodIcon className="twii"/></a> Lists</li>
          <li> <a href=""><FontAwesomeIcon icon={faUser} className="twii"/></a> Profile</li>
          <li> <a href=""><PendingIcon className="twii"/></a> More</li>
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
    <main>
      {/* <Outlet /> */}
    </main>
  </div>
  )
}

export default Sidebar
