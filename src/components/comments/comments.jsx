import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from '../../context/authContext';

const comments = [
    {
        id: 1,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe",
        userId: 1,
        profilePic: "https://source.unsplash.com/WNoLnJo7tS8"
    },
    {
        id: 2,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe",
        userId: 2,
        profilePic: "https://source.unsplash.com/WNoLnJo7tS8"
    }
]

const Comments = () =>{

    const { currentUser } = useContext(AuthContext);

    return(
        <div className="comments">
            <div className="write__comment">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment"/>
                <button>Send</button>
            </div>

            {comments.map(comment =>(
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span className="comment__name">{comment.name}</span>
                        <p>{comment.comment}</p>              
                        <span className="date">1 hour ago</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments