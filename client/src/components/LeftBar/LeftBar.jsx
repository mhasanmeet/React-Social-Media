import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import "./leftbar.scss";

function LeftBar() {
  //Auth Context
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="leftbar">
      <div className="container">

        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="avatar" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="/assets/icons/1.png" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="/assets/icons/2.png" alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="/assets/icons/3.png" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src="/assets/icons/4.png" alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="/assets/icons/5.png" alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span className="title">Your Shortcuts</span>
          <div className="item">
            <img src="/assets/icons/6.png" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="/assets/icons/7.png" alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="/assets/icons/8.png" alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="/assets/icons/9.png" alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="/assets/icons/10.png" alt="" />
            <span>Message</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span className="title">others</span>
          <div className="item">
            <img src="/assets/icons/11.png" alt="" />
            <span>Fundraisers</span>
          </div>
          <div className="item">
            <img src="/assets/icons/12.png" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="/assets/icons/13.png" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar