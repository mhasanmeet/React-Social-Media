import React, { useState } from 'react'
import "./post.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { GoGlobe } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import Comments from '../comments/comments';


const Posts = ({post}) =>{

    const [commentOpen, setCommentOpen] = useState(false)

    //temp like interactive
    const liked = true;

    return(
        <div className='post'>
            <div className="container">

                {/* user info part */}
                <div className='user'>
                    <div className="userInfo">
                        <img src={post.img} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className='name'>{post.name}</span>
                            </Link>

                            <div className="post-privacy">
                                <span className='date'>1 min ago</span>
                                <BsDot/>
                                <GoGlobe className='globe__icon'/>
                            </div>
                        </div>
                    </div>

                    <HiOutlineDotsHorizontal/>
                </div>

                {/* content part */}
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>

                {/* Post Action part */}
                <div className='post-action'>
                    <div className="item">
                        <p>
                            {liked ? <AiOutlineHeart className='item-icon'/> : <AiFillHeart className='item-icon'/>}
                            12 Like
                        </p>

                        <p onClick={ ()=> setCommentOpen(!commentOpen)}>
                            <BiCommentDots className='item-icon'/>
                            5 Comment
                        </p>

                        <p>
                            <RiShareForwardLine className='item-icon'/>
                            1 Share
                        </p>
                    </div>

                    {/* comment section */}
                    {commentOpen && <Comments/>}
                </div>

            </div>
        </div>
    )
}

export default Posts