import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar-nav ml-auto">
      <NavLink className="nav-item" to="/">
        Homepage
      </NavLink>
      <NavLink className="nav-item" to="/login">
        Log In
      </NavLink>
      <NavLink className="nav-item" to="/destinations">
        Destinations
      </NavLink>
      <NavLink className="nav-item" to="/posts">
        Posts
      </NavLink>
      <NavLink className="nav-item" to="/journal">
        Journal
      </NavLink>
    </nav>
  );
}

export default NavBar;
