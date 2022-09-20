import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  /* Toggle menu */
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a className="nav_logo">Piyush</a>
        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#home" className="nav_link">
                <i className="uil uil-estate nav_icon"></i>
                Home
              </a>
            </li>
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i>
                About
              </a>
            </li>
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i>
                Skills
              </a>
            </li>

            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#porfolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i>
                Projects
              </a>
            </li>
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>
                Blogs
              </a>
            </li>
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
