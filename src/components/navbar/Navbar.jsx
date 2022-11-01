import "./navbar.scss";
import { CiDark } from "react-icons/ci";
import { IoMdSunny } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { BsGrid, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { MdNotifications, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  //Context 
  const {toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>Social Media</span>
        </Link>
        <AiFillHome/>
        
        {/* Dark Toggle function */}
        {darkMode ? <IoMdSunny onClick={toggle}/> : <CiDark onClick={toggle}/>}
        
        <BsGrid/>

        <div className="search">
          <BsSearch/>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>

      <div className="navbar__right">
        <BsFillPersonFill/>
        <MdEmail/>
        <MdNotifications/>

        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar