import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineEye, AiOutlineInstagram } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";
import { PiStack } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { BiNavigation } from "react-icons/bi";
function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="navbar-link">
        <div className="navbar-icon-container">
          <VscHome className="navbar-icon" />
        </div>
      </NavLink>
      <NavLink to={"/projects"} className="navbar-link">
        <div className="navbar-icon-container">
          <AiOutlineEye className="navbar-icon" />
        </div>
      </NavLink>
      <NavLink to={"/clients"} className="navbar-link">
        <div className="navbar-icon-container">
          <PiStack className="navbar-icon" />
        </div>
      </NavLink>
      <NavLink to={"/contact"} className="navbar-link">
        <div className="navbar-icon-container">
          <BiNavigation className="navbar-icon" />
        </div>
      </NavLink>
      <span className="navbar-separator"></span>
      <Link to={"https://instagram.com/mc__projects"} target="_blank">
        <div className="navbar-icon-container">
          <AiOutlineInstagram className="navbar-icon" />
        </div>
      </Link>
      <Link to={"https://x.com/mc__projects"} target="_blank">
        <div className="navbar-icon-container">
          <RiTwitterXLine className="navbar-icon-twitter" />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
