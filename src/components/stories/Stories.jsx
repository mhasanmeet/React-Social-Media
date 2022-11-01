import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import "./stories.scss";

//Temporary dummy stories data
const stories = [
    {
        id: 1,
        name: "John Doe",
        img: "https://source.unsplash.com/MTZTGvDsHFY"
    },
    {
        id: 2,
        name: "Micheal Dull",
        img: "https://source.unsplash.com/iEEBWgY_6lA"
    },
    {
        id: 3,
        name: "John Husey",
        img: "https://source.unsplash.com/ZHvM3XIOHoE"
    },
    {
        id: 4,
        name: "Barbara Clara",
        img: "https://source.unsplash.com/6qf1uljGpU4"
    },
    {
        id: 5,
        name: "Yusuf Mohammed",
        img: "https://source.unsplash.com/a19OVaa2rzA"
    },
    {
        id: 6,
        name: "Justing Bobey",
        img: "https://source.unsplash.com/a6PMA5JEmWE"
    },
    {
        id: 7,
        name: "Samantha Juthi",
        img: "https://source.unsplash.com/jzz_3jWMzHA"
    },
]

const Stories = () =>{

    //get user image also
    const {currentUser} = useContext(AuthContext);

    return(
        <div className='stories'>

            {/* get user image */}
            <div className='story'>
                <img src={currentUser.profilePic} alt=""></img>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>

            {/* get story dummy data */}
            {stories.map(story =>(
                <div className='story' key={story.id}>
                    <img src={story.img} alt=""></img>
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories