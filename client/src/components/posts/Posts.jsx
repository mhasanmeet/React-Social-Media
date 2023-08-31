import React from 'react'
import "./posts.scss";
import PostsData from "../../data/PostsData"; //get post data
import Post from '../post/Post';
// use react query
import { useQuery } from 'react-query'
import { makeRequest } from '../../../axios';


function Posts() {

  // react query
  const { isLoading, error, data } = useQuery(['posts'], () =>
    // get axios api function
    makeRequest.get("/posts").then((res) =>{
      return res.data
    })
  )

    console.log(data, error)

  return (
    <div className="posts">
      {/* {data.map(post => (
        //send props in post 
        <Post post={post} key={post.id}/>
      ))} */}
    </div>
  )
}

export default Posts