import React, { useState } from "react";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked");
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
    console.log(`The current state of isClicked is ${isClicked}`);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          href="https://morning-ravine-07692.herokuapp.com/"
          className="navbar-item has-text-weight-bold is-size-4"
        >
          Employee Navigator
        </a>
        <a
          role="button"
          className={`navbar-burger has-dropdown burger ${
            isClicked === false ? "" : "is-active"
          }`}
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

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isClicked === false ? "" : "is-active"}`}
      >
        <div className="navbar-start">
          <a
            href="https://github.com/abautista3712/reactEmployeeDirectory"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item"
          >
            GitHub
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">More</div>
            <div className="navbar-dropdown">
              <a
                href="https://abautista3712.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
