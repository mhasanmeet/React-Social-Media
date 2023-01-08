import React from 'react'
import "./posts.scss";
import PostsData from "../../data/PostsData"; //get post data
import Post from '../post/Post';

function Posts() {
  return (
    <div className="posts">
      {PostsData.map(post => (
        //send props in post 
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts