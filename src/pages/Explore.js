import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import Main from '../layouts/Main';
import './page styles/explore.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Explore = () => {
  return (
    <Main>
      <div className='middle-container explore'>

        <div className="explore-search-container">
          <div class="explore-search">
            <div className="explore-search__input-container">
                <SearchOutlined fontSize='big' />
                <input className="explore-search__input" type="text" placeholder="Search Twitter" />
            </div>
          </div>
          <SettingsOutlinedIcon fontSize='small' className='explore-settings'  />

        </div>

        <div className="explore-base">
          <h3>Trends for you</h3>
        </div>

        <div className='trend-tile'>
          <h6>Sports . Trending</h6>
          <h4>#Qatarin</h4>
          <h6>1234 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>Abokifx</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>Elemiewele</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>#MUFCTakeover</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>#MUFCTakeover</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>#MUFCTakeover</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>#MUFCTakeover</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>#MUFCTakeover</h4>
          <h6>467 Tweets</h6>
        </div>

        <div className='trend-tile'>
          <h6>Trending in Nigeria</h6>
          <h4>#MUFCTakeover</h4>
          <h6>467 Tweets</h6>
        </div>


      </div>
    </Main>
  )
}

export default Explore
