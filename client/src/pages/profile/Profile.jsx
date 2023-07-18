import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { BsDot, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';
import "./profile.scss"
import Posts from "../../components/posts/Posts";

function Profile() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="profile">
      <div className="images">
        <img className="cover" src={currentUser.coverPic} alt="" />
      </div>

      <div className="profileContainer">
        <div className="profilePic">
          <img className="profile" src={currentUser.profilePic} alt="" />
        </div>
        <div className="userInfo">
          <div className="left">
            <span className="name">{currentUser.name}</span>
            <div className="followSection">
              <span>1.7K followers</span>
              <BsDot/>
              <span>2.2K following</span>
            </div>
          </div>

          <div className="right">
            <span>Social Links</span>
            <div className="links">
              <BsFacebook/>
              <BsTwitter/>
              <FaDev/>
            </div>
          </div>
        </div>
      </div>
      <div className="postSection">
        <Posts/>
      </div>
    </div>
  )
}

export default Profile