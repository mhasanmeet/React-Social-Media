import React, { useState } from 'react'
import "./post.scss";
import {RxDotsVertical} from 'react-icons/rx';
import {BsHeart, BsHeartFill} from 'react-icons/bs';
import {BiCommentDetail} from 'react-icons/bi';
import {FaShareSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

function Post({post}) { //get props

    //comment state
    const [commentOpen, setCommentOpen] = useState(false)

    //temporary like condition
    const liked = false;

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
                <RxDotsVertical className='icon'/>
            </div>

            <div className="postContent">
                <p>{post.desc}</p>
                <img src={post.postImg} alt="" />
            </div>
            
            <div className="reacts">
                <div className="item">
                    {liked ? <BsHeartFill className='icon'/> : <BsHeart className='icon'/>}
                    12 Likes
                </div>
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                    <BiCommentDetail className='icon'/>
                    Comments
                </div>
                <div className="item">
                    <FaShareSquare className='icon'/>
                    Share
                </div>
            </div>

            {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default Post