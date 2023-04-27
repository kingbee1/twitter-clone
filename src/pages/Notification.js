import './page styles/notification.css'
import Main from '../layouts/Main'
import '../components/home/home.css'
import icon from '../images/david.jpeg'



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
          bell image
          <img src={icon} alt='notif' />
          <img src={icon} alt='notif' />
          <img src={icon} alt='notif' />
          <img src={icon} alt='notif' />
          <img src={icon} alt='notif' />
        </div>
        <div className="notif-1"></div>
        <div className="notif-1"></div>
      
      </div>

    </Main >
  )
}

export default Notification
