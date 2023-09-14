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
import PeopleIcon from '@mui/icons-material/People';
import ClearIcon from '@mui/icons-material/Clear';
import './sidebar.css'
import me from '../../images/me.png'
import x from '../../images/x.png'


function Sidebar() {
  return (
    
    <div className='left-container'>

      <ul className='side__nav-links'>
        <a href="/"><img src={x} alt="x-logo" className='x-icon' /></a>
      {/* <a href=""><FontAwesomeIcon icon={faTwitter} className="twii-icon" /> </a> */}
        <li><HomeOutlinedIcon /><NavLink to={"/"}>Home</NavLink> </li>
        <li><SearchIcon /><NavLink to={"/explore"}>Explore</NavLink></li>
        <li><NotificationsNoneOutlinedIcon /><NavLink to={"/notification"}>Notification</NavLink></li>
        <li><EmailOutlinedIcon /><NavLink to={"/messages"}>Messages</NavLink></li>  
        <li><AodIcon /><NavLink>Lists</NavLink></li>
        <li><BookmarkBorderOutlinedIcon /><NavLink to={"/bookmark"}>Bookmarks</NavLink></li>
        <li><PeopleIcon /><NavLink>Communities</NavLink></li>
        <li><ClearIcon /><NavLink>Verified</NavLink></li>
        <li><PermIdentityOutlinedIcon /><NavLink>Profile</NavLink> </li>
        <li><PendingOutlinedIcon /><NavLink>More</NavLink></li>
      </ul>

      <div className="mobile-nav-links">
        <ul className='mobile-nav-icons'>
          <li> <NavLink to="/"><img src={x} alt="x-logo" className='x-icon' /></NavLink> </li>
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
        <a href="#">Post</a>
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
