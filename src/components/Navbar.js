import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import contactImg from "./Website_contact_me.png";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="desktopmenuListItem"
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktopmenuListItem"
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktopmenuListItem"
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="technologies"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktopmenuListItem"
          duration={500}
        >
          Technologies
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktopmenuListItem"
          duration={500}
        >
          Contact
        </Link>
      </div>
      <img
        src=""
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="listItem"
          onClick={() => setShowMenu(!false)}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          className="listItem"
          onClick={() => setShowMenu(false)}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          className="listItem"
          onClick={() => setShowMenu(false)}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="technologies"
          spy={true}
          smooth={true}
          offset={-50}
          className="listItem"
          onClick={() => setShowMenu(false)}
          duration={500}
        >
          Technologies
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          className="listItem"
          onClick={() => setShowMenu(false)}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
