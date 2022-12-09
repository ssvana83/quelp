import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        style={linkStyles}
        activestyle={{
        background: "darkblue",
        }}
      >
        All Reviews
      </NavLink>
      <NavLink
        to="reviews/new"
        style={linkStyles}
        activestyle={{
        background: "darkblue",
        }}
      >
        Create a New Review
      </NavLink>
      <NavLink 
        to="reviews/:id"
        style={linkStyles}
        activestyle={{
        background: "darkblue",
        }}
      > Reviews  
      </NavLink>
    </div>
  );
}

export default Navbar;