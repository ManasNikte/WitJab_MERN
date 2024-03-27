import React from 'react';
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink instead of MyLink

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });

  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  const navOpenedStyle = {
    backgroundColor: '#010606',
  };

  return (
    <nav className="navbar" style={navOpenedStyle}>
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <RouterLink // Use RouterLink instead of MyLink
              to="/#headerbg"
              onClick={openBar}
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
            >
              WitJab
            </RouterLink>
          </h1>
          <ul className="bar">
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/#headerbg"
                onClick={openBar}
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/#about"
                onClick={openBar}
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/#services"
                onClick={openBar}
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/#projects"
                onClick={openBar}
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Projects
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/#team"
                onClick={openBar}
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Team
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/#contact"
                onClick={openBar}
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/blogs"
                onClick={openBar}
              >
                Blogs
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/careers"
                onClick={openBar}
              >
                Careers
              </RouterLink>
            </li>
            <li>
              <RouterLink // Use RouterLink instead of MyLink
                to="/login"
                onClick={openBar}
              >
                Login
              </RouterLink>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
