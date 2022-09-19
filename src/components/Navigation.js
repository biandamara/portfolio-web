import { NavLink } from "react-router-dom";

// import styles
import styles from "../assets/css/Navigation.module.css";

// import scripts
import "../assets/scripts/Navigation.js";

function Navigation() {
  return (
    <>
      {/* navigation bar start */}
      <nav
        className={`navbar navbar-expand-sm sticky-top ${styles.navigation}`}
      >
        <div className="container-fluid">
          {/* brand start */}
          <a className="navbar-brand" href="/">
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663500675/Portfolio%20Web/Icons/sun_vkjgox.png"
              alt="sun"
            ></img>
          </a>
          {/* brand end */}

          {/* hamburger button start */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* hamburger button end */}

          {/* navigation menus start*/}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* navigation menus end */}
        </div>
      </nav>
      {/* navigation bar end */}
    </>
  );
}

export default Navigation;
