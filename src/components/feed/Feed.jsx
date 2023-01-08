import React from 'react'
import Posts from '../posts/Posts';
import Stories from '../stories/Stories';
import "./feed.scss";

function Feed() {
  return (
    <div className="feed">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Feed