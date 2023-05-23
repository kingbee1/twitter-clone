import React from 'react'
import Main from '../layouts/Main'
import cnn from '../images/cnn.png'
import david from '../images/david.jpeg'
import danny from '../images/Danny.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faImages, faPollH, faRetweet, faChartColumn, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGift, faFaceSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Bookmark = () => {
  return (
    <Main>
      <div className='middle-container'>
        <div className='home'>
          <h2>Bookmarks</h2>
          <h5>@real_kingbee</h5>
        </div>

        

        {/*----- users tweet ----*/}
        <section className='tweet'>
          <div className='user-profile'>
            <img src={cnn} alt="user-profile" />
            <div className='line'></div>
          </div>
          
          <div className='user-tweet-box'>
            <div className='user-tweet'>
              <h4>CNN Official News</h4>
              <h6>@cnn_funky_news</h6>
            </div>
            <p>Davido claiming he is related to kingbee and that people should help him find Lorem ipsum, 
              dolor sit amet consectetur adipisicing elit. Officia iure dolore possimus!
            </p>
            <img src={david} alt="david" />
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

            <div className="second-user">
              <img src={cnn} alt="user-profile" />
              <p>Show this thread</p>
            </div>

          </div>

        </section>

        {/* tweet two */}

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

        

        

      </div>
    </Main>
  )
}

export default Bookmark
