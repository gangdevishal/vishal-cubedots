import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button style={{backgroundColor:"pink",margin:"5px 10px 0 5px",padding:"5px 0 0 10px"}}>
          <Link to="/" className="navbar-brand">
            Cubedots
          </Link>
          </button>
          <li>
            <Link to="/" className="navbar-brand navigation">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/residential-property/building"
              className="navbar-brand navigation"
            >
              Building
            </Link>
          </li>
          <li>
            <Link
              to="/residential-property/building/floor"
              className="navbar-brand navigation"
            >
              Floor
            </Link>
          </li>
          <li>
            <Link
              to="/residential-property/gallery"
              className="navbar-brand navigation"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/residential-property/location"
              className="navbar-brand navigation"
            >
              Location
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
