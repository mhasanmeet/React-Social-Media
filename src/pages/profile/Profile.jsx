import "./profile.scss";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaGlobeAmericas, FaEnvelope } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Posts from "../../components/posts/Posts";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img src="https://source.unsplash.com/tI_Odb7ZU6M" alt="" className="cover"/>
        <img src={currentUser.profilePic} alt="" className="profilePic"/>
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="#">
              <BsFacebook className="facebook icons"/>
            </a>
            <a href="#">
              <BsTwitter className="twitter icons"/>
            </a>
            <a href="#">
              <BsLinkedin className="linkedIn icons"/>
            </a>
          </div>

          <div className="center">
            <h3>John Doe</h3>
            <div className="userInfo">
              <span><FiMapPin/> USA</span>
              <span><FaGlobeAmericas/> mhasan.one</span>
            </div>
            <button>Follow</button>
          </div>
          
          <div className="right">
            <FaEnvelope className="icon"/>
            <BiDotsVerticalRounded className="icon"/>
          </div>
        </div>
      </div>

      <Posts/>
    </div>
  )
}

export default Profile