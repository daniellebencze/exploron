import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <br />
      <br />
      <NavLink className="nav-item" to="/">
        Home
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
      <br />
      <br />
      <br />
      {user ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <>
          <NavLink className="nav-item" to="/signup">
            Signup
          </NavLink>
          <NavLink className="nav-item" to="/login">
            Login
          </NavLink>
        </>
      )}
    </header>
  );
}

export default NavBar;
