import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container"> {/* Wrap the content in a container for centering */}
        <a className="navbar-brand mx-auto" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"> {/* Center the navigation links */}
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                {props.aboutText} <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Github <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                LinkedIn <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info-dark my-2 my-sm-0"
              type="submit"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text Here",
};
