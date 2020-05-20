import React, { useState } from "react";

export const Navbar = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked");
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold is-size-4">
          Employee Navigator
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu is-active">
        <div className="navbar-start">
          <a className="navbar-item">GitHub</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
