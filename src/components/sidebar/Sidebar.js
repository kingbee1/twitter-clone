import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AodIcon from '@mui/icons-material/Aod';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import './sidebar.css'
import me from '../../images/me.png'


function Sidebar() {
  return (
    
    <div className='left-container'>

      <div className="nav-links">
        <ul className='nav-icons'>
          <a href=""><FontAwesomeIcon icon={faTwitter} className="twii-icon" /> </a>

          <li ><NavLink className='navlink' to="/"><HomeOutlinedIcon className="twii"/>Home</NavLink></li>
          <li ><NavLink className='navlink' to="/explore"><TagOutlinedIcon className="twii"/>Explore</NavLink></li>
          <li ><NavLink className='navlink' to="/notification"><NotificationsNoneOutlinedIcon className="twii"/>Notification</NavLink></li>
          <li> <NavLink className='navlink' to="/messages" ><EmailOutlinedIcon className="twii"/> Messages</NavLink></li>
          <li ><NavLink className='navlink' to="/bookmark"><BookmarkBorderOutlinedIcon className="twii"/>Bookmarks</NavLink></li>
          <li ><NavLink className='navlink' to="/bookmark"><AodIcon className="twii"/>Lists</NavLink></li>
          <li> <NavLink className='navlink'><PermIdentityOutlinedIcon className="twii"/>Profile</NavLink></li>
          <li> <NavLink className='navlink'><PendingOutlinedIcon className="twii"/>More</NavLink></li>
        </ul>
      </div>

      <div className="mobile-nav-links">
        <ul className='mobile-nav-icons'>
          <li><FontAwesomeIcon icon={faTwitter} className="twii" /> </li>
          <li ><NavLink className='navlink' to="/"><HomeOutlinedIcon className="twii"/></NavLink></li>
          <li ><NavLink className='navlink' to="/explore"><SearchIcon className="twii"/></NavLink></li>
          <li ><NavLink className='navlink' to="/notification"><NotificationsNoneOutlinedIcon className="twii"/></NavLink></li>
          <li> <NavLink className='navlink' to="/messages" ><EmailOutlinedIcon className="twii"/></NavLink></li>
          <li> <NavLink className='navlink'><PermIdentityOutlinedIcon className="twii"/></NavLink></li>
          <li> <NavLink className='navlink'><PendingOutlinedIcon className="twii"/></NavLink></li>
          <li> <NavLink className='navlink'><HistoryEduIcon className="twii"/></NavLink></li>
          <img src={me} alt="profile" />
        </ul>
      </div>

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
