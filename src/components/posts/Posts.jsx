import React from 'react'
import Post from "../post/Post";
import "./posts.scss";

//dummy posts
const posts = [
    {
        id: 1,
        name: "John Doe",
        userId: 1,
        profilePic: "https://source.unsplash.com/MTZTGvDsHFY",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius",
        img: "https://source.unsplash.com/MTZTGvDsHFY"
    },
    {
        id: 2,
        name: "John Doe",
        userId: 2,
        profilePic: "https://source.unsplash.com/MTZTGvDsHFY",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius",
        img: "https://source.unsplash.com/MTZTGvDsHFY"
    },
]

const Posts = () =>{
    return(
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts