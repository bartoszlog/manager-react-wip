import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { item } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {item}
          </a>
          <div>
            <ul className="navbar-nav mr-a">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// const headingStyle = {
//   color: "red",
//   fontSize: "45px"
// };

Header.defaultProps = {
  item: "No czesc defaultowy headerze"
};

Header.propTypes = {
  item: PropTypes.string.isRequired
};

export default Header;
