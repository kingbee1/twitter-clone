import './page styles/notification.css'
import Main from '../layouts/Main'
import '../components/home/home.css'
import icon from '../images/david.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'



const Notification = () => {
  return (
    <Main >

      <div className='notifs-container'>
        

        <div className='notif'>
          <h2>Notifications </h2>
        </div>
        <div className='notif-tab'>
          <h5>All</h5>
          <h5>Verified</h5>
          <h5>Mentions</h5>
        </div>

        <div className="notif-1">
          <div className="notif-box">
          <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>New Tweet notifications for </p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>New Tweet notifications for </p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className='notif-box'>
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>Subscribe to Jack Forge and get access to their exclusive content</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>Kemi and 17 others followed you </p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>Bimpe Mentioned you </p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>

        <div className="notif-1">
          <div className="notif-box">
            <FontAwesomeIcon className='notif-icon' icon={faBell} />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
            <img src={icon} alt='notif' />
          </div>
          <p>new notifications</p>
        </div>
      
      </div>

    </Main >
  )
}

export default Notification
