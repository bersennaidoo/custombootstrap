import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCog, faSpaceShuttle, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function TopNav() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Awesome car dealership
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="icon-link active" aria-current="page" href="/">
                <FontAwesomeIcon icon={faHome} />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="icon-link" href="#">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Find A Dealer
              </a>
            </li>
            <li className="nav-item">
              <a className="icon-link" href="#">
                <FontAwesomeIcon icon={faCog} />
                Build And Price
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="icon-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faSpaceShuttle} />
                Awesome Cars
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reset
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
