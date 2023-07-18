import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsMoonFill, BsSearch, BsBell, BsSun } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import "./navbar.scss"
import { useContext } from "react"; //get useContext api from React
import { DarkModeContext } from "../../context/darkModeContext"; //get our Dark mode functionality from darkModeContext
import { AuthContext } from "../../context/authContext";

function NavBar() {
  //dark Mode context
  const {toggle, darkMode} = useContext(DarkModeContext)
  //Auth context
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>Social Media</span>
        </Link>
        <AiOutlineHome className="icon"/>
        {darkMode ? <BsSun className="icon" onClick={toggle}/> : <BsMoonFill className="icon" onClick={toggle}/> }
        <ImMenu className="icon"/>

        <div className="search">
          <BsSearch/>
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="right">
        <RxAvatar className="icon"/>
        <HiOutlineMail className="icon"/>
        <BsBell className="icon"/>

        <div className="user">
          <img src={currentUser.profilePic} alt="avatar" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar