import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineEye, AiOutlineInstagram } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";
import { PiStack } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { BiNavigation } from "react-icons/bi";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="navbar-link">
        <div className="navbar-icon-container">
          <VscHome
            className="navbar-icon"
            data-tooltip-id="home-tooltip"
            data-tooltip-content={`Inicio`}
          />
        </div>
        <Tooltip
          id="home-tooltip"
          className="tooltip"
          disableStyleInjection="true"
          offset={27}
        />
      </NavLink>
      <NavLink to={"/projects"} className="navbar-link">
        <div
          className="navbar-icon-container"
          data-tooltip-id="projects-tooltip"
          data-tooltip-content={`Proyectos`}
        >
          <AiOutlineEye className="navbar-icon" />
        </div>
        <Tooltip
          id="projects-tooltip"
          className="tooltip"
          disableStyleInjection="true"
          offset={20}
        />
      </NavLink>
      <NavLink
        to={"/clients"}
        className="navbar-link"
        data-tooltip-id="clients-tooltip"
        data-tooltip-content={`Clientes`}
      >
        <div className="navbar-icon-container">
          <PiStack className="navbar-icon" />
        </div>
        <Tooltip
          id="clients-tooltip"
          className="tooltip"
          disableStyleInjection="true"
          offset={20}
        />
      </NavLink>
      <NavLink
        to={"/contact"}
        className="navbar-link"
        data-tooltip-id="contact-tooltip"
        data-tooltip-content={`Contacto`}
      >
        <div className="navbar-icon-container">
          <BiNavigation className="navbar-icon" />
        </div>
        <Tooltip
          id="contact-tooltip"
          className="tooltip"
          disableStyleInjection="true"
          offset={20}
        />
      </NavLink>
      <span className="navbar-separator"></span>
      <Link to={"https://instagram.com/mc__projects"} target="_blank">
        <div
          className="navbar-icon-container"
          data-tooltip-id="instagram-tooltip"
          data-tooltip-content={`Instagram →`}
        >
          <AiOutlineInstagram className="navbar-icon" />
        </div>
        <Tooltip
          id="instagram-tooltip"
          className="tooltip"
          disableStyleInjection="true"
          offset={20}
        />
      </Link>
      <Link to={"https://x.com/mc__projects"} target="_blank">
        <div className="navbar-icon-container">
          <RiTwitterXLine
            className="navbar-icon-twitter"
            data-tooltip-id="x-tooltip"
            data-tooltip-content={`X →`}
          />
        </div>
        <Tooltip
          id="x-tooltip"
          className="tooltip"
          disableStyleInjection="true"
          offset={29}
        />
      </Link>
    </div>
  );
}

export default Navbar;
