import React from 'react'
import "./rightbar.scss";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <p>Friends Suggestion</p>

          <div className="user">
            <div className="userInfo">
              <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
              <span>Mahmudul Hasan</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
              <span>Mahmudul Hasan</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <p>Latest Activities</p>

          <div className="user">
            <div className="userInfo">
              <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
              <span className='activityUser'>
                <p>Mahmudul Hasan</p>
                Changed their cover photo
              </span>
            </div>
            <span className='activityTime'>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
              <span className='activityUser'>
                <p>Kazi Sakib</p>
                Liked your photo
              </span>
            </div>
            <span className='activityTime'>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
              <span className='activityUser'>
                <p>Yeamini Eva</p>
                Share a post
              </span>
            </div>
            <span className='activityTime'>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <p>Active Friends</p>

          <div className="user">
            <div className="userInfo">
              <div className='onlineUser'>
                <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
                <div className="active online"/>
              </div>
              <span>Mahmudul Hasam</span>
            </div>
            <div className="activityTime">
              Online
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <div className='onlineUser'>
                <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
                <div className="active wasOnline"/>
              </div>
              <span>Kazi Sakib</span>
            </div>
            <div className="activityTime">
              Active 2 min ago
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <div className='onlineUser'>
                <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
                <div className="active offline"/>
              </div>
              <span>Yeamini Eva</span>
            </div>
            <div className="activityTime">
              Last seen yesterday
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar