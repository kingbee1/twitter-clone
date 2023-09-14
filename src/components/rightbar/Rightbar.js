import React from 'react'
import './rightbar.css'
import me from '../../images/me.png'
import dash from '../../images/darshan.jpeg'
import x from '../../images/x.png'
import SearchIcon from '@mui/icons-material/Search';


function Rightbar() {
  return (
 
    <div className="right-container-box">

      <div class="search-bar">
        <button><SearchIcon className='search' /></button>
        <input type="text" placeholder="Search" />
      </div>

      <div className='right-premium'>
        <h2>Subscribe to Premium</h2>
        <h4 className=''>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h4>
        <button className='sub-btn'>Subscribe</button>
      </div>

      <div className='trend-box'>
        <h2>Trends for you</h2>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>Ronaldo</h4>
          <h6>467k Tweets</h6>
        </div>

        <p>Show more</p>

      </div>

      <div className="suggest">
        <div className="suggest-box">
          <h2>Who to follow</h2>

          <div className="suggest-profile">
            <img src={me} alt="me" />
            <div className='suggest-name'>
              <h4>Kingbee</h4>
              <h4 className='handle'>@real_kingbee</h4>
            </div>
            <button>Follow</button>
          </div>

          <div className="suggest-profile">
            <img src={dash} alt="me" />
            <div className='suggest-name'>
              <h4>Darshan</h4>
              <h4 className='handle'>@darsha4874</h4>
            </div>
            <button>Follow</button>
          </div>

          <div className="suggest-profile">
            <img src={x} alt="me" />
            <div className='suggest-name'>
              <h4>Mr X</h4>
              <h4 className='handle'>@gberule234</h4>
            </div>
            <button>Follow</button>
          </div>

          <p>Show more</p>

        </div>
      </div>   

    </div>
    
  )
}

export default Rightbar
