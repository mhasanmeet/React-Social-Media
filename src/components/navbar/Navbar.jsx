import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsMoonFill, BsSearch, BsBell } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import "./navbar.scss"

function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>Social Media</span>
        </Link>
        <AiOutlineHome className="icon"/>
        <BsMoonFill className="icon"/>
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
          <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="avatar" />
          <span>Mahmudul Hasan</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar