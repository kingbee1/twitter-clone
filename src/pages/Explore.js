import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import Main from '../layouts/Main';
import './page styles/explore.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Explore = () => {
  return (
    <Main>
      <div className='middle-container explore'>

        <div className="explore-container">
          <div class="explore-search">
            <div className="explore-search__input-container">
                <SearchOutlined fontSize='big' />
                <input className="explore-search__input" type="text" placeholder="Search Twitter" />
            </div>
          </div>
          <SettingsOutlinedIcon fontSize='small' className='explore-settings'  />

        </div>


      </div>
    </Main>
  )
}

export default Explore
