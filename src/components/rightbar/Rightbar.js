import React from 'react'
import './rightbar.css'
import me from '../../images/me.png'
import search from '../../images/search.png'


function Rightbar() {
  return (
 
    <div className="right-container-box">

      <div class="search-container">
        <form action="/" method="GET" class="form">
          <input type="search" placeholder="Search" class="search-field" />
          <button type="submit" class="search-button">
            <img src={search} alt="search" />
          </button>
        </form>
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
            <img src={me} alt="me" />
            <div className='suggest-name'>
              <h4>Mary</h4>
              <h4 className='handle'>@real_kingbee</h4>
            </div>
            <button>Follow</button>
          </div>

          <div className="suggest-profile">
            <img src={me} alt="me" />
            <div className='suggest-name'>
              <h4>Kingbee</h4>
              <h4 className='handle'>@real_kingbee</h4>
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
