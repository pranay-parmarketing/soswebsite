import React, { useEffect, useRef } from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const navbarRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbarRef.current.classList.add("active");
      } else if (window.scrollY < 100) {
        navbarRef.current.classList.remove("active");
      }
    });
  }, []);
  return (
    <nav className="sos-navbar">
      <div className="container p-2">
        <div className="sos-navbar-logo rounded" ref={navbarRef}>
          <img src={logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
