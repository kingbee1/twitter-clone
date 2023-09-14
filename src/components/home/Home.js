import React from 'react'
import './home.css'
import me from '../../images/me.png'
import working from '../../images/working.png'
import davido from '../../images/david.jpeg'
import danny from '../../images/Danny.jpeg'
import cnn from '../../images/cnn.png'
import obong from '../../images/obong.jpeg'
import bisi from '../../images/bisi ai.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPollH, faRetweet, faChartColumn, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGift, faFaceSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import Main from '../../layouts/Main';


function Home() {
  return (
    <Main>
    <div className='middle-container'>
      <div className='home'>
        <h2>Home</h2>
      </div>
      <h5>For you</h5>

      <div className='tweet-post'>
        <form action="">
          <div className='form-up'>
            <img src={me} alt="profile-img" />

            <div className='tweet-form'>
              <textarea class="input" placeholder="What's happening?" />
            </div>

          </div>

          <div className='form-down'>
            <div className='icons'>
              <FontAwesomeIcon icon="fa-light fa-image" />
              <FontAwesomeIcon icon={faImages} />
              <FontAwesomeIcon icon={faGift} />
              <FontAwesomeIcon icon={faPollH} />
              <FontAwesomeIcon icon={faFaceSmile} />
              <FontAwesomeIcon icon={faCalendar} />
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <button className='btn' type="submit">Tweet</button>
            </div>
          </div>
        </form>
      </div>
      <div className="middle-show">
        <p>Show 19 Tweets</p>
      </div>
        {/*----- users tweet ----*/}
      
        <section className='tweet-container'>
        <div className="tweet">

          <div className='user-profile'>
            <img src={cnn} alt="user-profile" />
          </div>
          
          <div className='user-tweet-box'>
            <div className='user-tweet'>
              <h4>mufcmpb</h4>
              <h6>@mufcmpb</h6>
            </div>
            <p>With Jadon Sancho & Antony both 
              not training with the first-team, who starts our next few games at right-wing? 🤔👇
            </p>
            <img src={working} alt="working" />
            <div className="engage">

              <div className='engaged'>
              <FontAwesomeIcon icon={faComment} /> 
              <p>419</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faRetweet} /> 
              <p>69k</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faHeart} />
              <p>43k</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faChartColumn}/>
              <p>419</p>
              </div>
              
              <div className='engaged'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <p>4519</p>
              </div>
            </div>


          </div>
        </div>

       
      </section>
      {/* sees  */}

      <section className='tweet-container'>
        <div className="tweet">

          <div className='user-profile'>
            <img src={cnn} alt="user-profile" />
          </div>
          
          <div className='user-tweet-box'>
            <div className='user-tweet'>
              <h4>CNN Official News</h4>
              <h6>@cnn_funky_news</h6>
            </div>
            <p>see for TEST is related to me and that people should help him find Lorem ipsum, 
              dolor sit amet consectetur elit. Officia iure dolore possimus!
            </p>
            <img src={bisi} alt="david" />
            <div className="engage">

              <div className='engaged'>
              <FontAwesomeIcon icon={faComment} /> 
              <p>419</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faRetweet} /> 
              <p>69k</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faHeart} />
              <p>43k</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faChartColumn}/>
              <p>419</p>
              </div>
              
              <div className='engaged'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <p>4519</p>
              </div>
            </div>


          </div>
        </div>

       
      </section>


      {/* ends */}


      <section className="tweet-2">
        <div className='user-profile'>
          <img src={obong} alt="user-profile" />
        </div>

        <div className='user-tweet-box'>
          <div className='user-tweet'>
            <h4>Obong Roviel</h4>
            <h6>@R0VIEL</h6>
            <h6>. 5h</h6>
          </div>
          <p>Lyta called out Olamide, they said he was ungrateful
              YBNL princess called out Olamide, they said she was ungrateful 
              Devolee has been ranting since, they said he’s ungrateful 
              I hate selective outrage, do it all or don’t do at all
          </p>
          <div className="engage">

            <div className='engaged'>
            <FontAwesomeIcon icon={faComment} /> 
            <p>419</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faRetweet} /> 
            <p>69k</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faHeart} />
            <p>43k</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faChartColumn}/>
            <p>419</p>
            </div>
            
            <div className='engaged'>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <p>4519</p>
            </div>
          </div>

        </div>
      </section>
        
      
      <section className='tweet-container'>
        <div className="tweet">

          <div className='user-profile'>
            <img src={working} alt="user-profile" />
           
          </div>
          
          <div className='user-tweet-box'>
            <div className='user-tweet'>
              <h4>CNN Official News</h4>
              <h6>@davido</h6>
            </div>
            <p>Davido claiming he is related to kingbee and that people should help him find Lorem ipsum, 
              dolor sit amet consectetur adipisicing elit. Officia iure dolore possimus!
            </p>
            <img src={working} alt="working" />

            <div className="engage">

              <div className='engaged'>
              <FontAwesomeIcon icon={faComment} /> 
              <p>419</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faRetweet} /> 
              <p>69k</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faHeart} />
              <p>43k</p>
              </div>

              <div className='engaged'>
              <FontAwesomeIcon icon={faChartColumn}/>
              <p>419</p>
              </div>
              
              <div className='engaged'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <p>4519</p>
              </div>
            </div>


          </div>


        </div>
     

      </section>

      <section className="tweet-2">
        <div className='user-profile'>
          <img src={danny} alt="user-profile" />
        </div>

        <div className='user-tweet-box'>
          <div className='user-tweet'>
            <h4>Danny Thompson</h4>
            <h6>@dannythompson</h6>
            <h6>. 5h</h6>
          </div>
          <p>Davido claiming he is related to kingbee and that people should help him find Lorem ipsum, 
            dolor sit amet consectetur adipisicing elit. Officia iure dolore possimus!
          </p>
          <div className="engage">

            <div className='engaged'>
            <FontAwesomeIcon icon={faComment} /> 
            <p>419</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faRetweet} /> 
            <p>69k</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faHeart} />
            <p>43k</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faChartColumn}/>
            <p>419</p>
            </div>
            
            <div className='engaged'>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <p>4519</p>
            </div>
          </div>

        </div>
      </section>

      <section className="tweet-2">
        <div className='user-profile'>
          <img src={danny} alt="user-profile" />
        </div>

        <div className='user-tweet-box'>
          <div className='user-tweet'>
            <h4>Danny Thompson</h4>
            <h6>@dannythompson</h6>
            <h6>. 5h</h6>
          </div>
          <p>You absolutely got this, don't let anyone else tell you otherwise. Lorem ipsum, 
            dolor sit amet consectetur adipisicing elit. Officia iure dolore possimus!
          </p>
          <div className="engage">

            <div className='engaged'>
            <FontAwesomeIcon icon={faComment} /> 
            <p>419</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faRetweet} /> 
            <p>69k</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faHeart} />
            <p>43k</p>
            </div>

            <div className='engaged'>
            <FontAwesomeIcon icon={faChartColumn}/>
            <p>419</p>
            </div>
            
            <div className='engaged'>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <p>4519</p>
            </div>
          </div>

        </div>
      </section>

                
      
      </div>
      </Main>
  )
}

export default Home
