import React from 'react'
import "./post.scss";
import {RxDotsVertical} from 'react-icons/rx';
import { Link } from 'react-router-dom';

function Post({post}) { //get props
  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.userImg} alt="" />

                    <div className="details">
                        {/* profile name to be linked */}
                        <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                            <span>{post.name}</span>
                        </Link>
                        <span className='time'>1 min ago</span>
                    </div>
                </div>
                <RxDotsVertical/>
            </div>

            <div className="postContent">
                <p>{post.desc}</p>
                <img src={post.postImg} alt="" />
            </div>
            
            <div className="share"></div>
        </div>
    </div>
  )
}

export default Post