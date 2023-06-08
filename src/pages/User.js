import React from 'react'
import Main from '../layouts/Main'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const User = () => {
  return (
    <Main>
        <div className="middle-container">
        <div className="home">
            <div className='bio-top'>
               <ArrowBackOutlinedIcon /> 
            </div>
            <div>
                <h2>Real Kingbee</h2>
                <h6>99.6k Tweets</h6>
            </div>
        </div>
        </div>
    </Main>
  )
}

export default User
