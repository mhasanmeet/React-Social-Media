import React, { useContext } from 'react'
import "./stories.scss";
import StoriesData from "../../data/StoriesData";
import { AuthContext } from '../../context/authContext';

function Stories() {
    //Auth Context
    const {currentUser} = useContext(AuthContext)

  return (
    <div className="stories">
        
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>

        {StoriesData.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories