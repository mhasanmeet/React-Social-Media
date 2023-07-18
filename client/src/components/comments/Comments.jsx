import React, { useContext } from 'react'
import "./comments.scss";
import CommentsData from "../../data/CommentsData";
import { AuthContext } from '../../context/authContext';

function Comments() {

    //Auth Context
    const {currentUser} = useContext(AuthContext)

  return (
    <div className="comments">

        {/* Write comment */}
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <textarea type="text" placeholder="Write your comment"/>
            <button>Submit</button>
        </div>

        {/* Dynamic Comments data from static data */}
        {CommentsData.map(comment =>(
            <div className="comments" key={comment.id}>
                <img src={comment.profilePic} alt="" />
                <div className="comment">
                    <span>{comment.name}</span>
                    <p>{comment.comment}</p>
                </div>
                <span className='time'>1 min ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments