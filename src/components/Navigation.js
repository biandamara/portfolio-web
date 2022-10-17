import { NavLink } from "react-router-dom";

// import styles
import styles from "../assets/css/Navigation.module.css";

function Navigation() {
  return (
    <>
      {/* navigation bar - start */}
      <nav
        className={`navbar navbar-expand-sm sticky-top ${styles.navigation}`}
      >
        <div className={`container-fluid`}>
          {/* brand - start */}
          <a className={`navbar-brand`} href={`/`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663500675/Portfolio%20Web/Icons/sun_vkjgox.png`}
              alt={``}
            ></img>
          </a>
          {/* brand - end */}

          {/* hamburger button - start */}
          <button
            className={`navbar-toggler`}
            type={`button`}
            data-bs-toggle={`collapse`}
            data-bs-target={`#navbarNav`}
            aria-controls={`navbarNav`}
            aria-expanded="false"
            aria-label={`Toggle navigation`}
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          {/* hamburger button - end */}

          {/* navigation menus - start*/}
          <div
            className={`collapse navbar-collapse ${styles.menus}`}
            id="navbarNav"
          >
            <ul
              className={`navbar-nav nav-pills card-header-pills text-center`}
            >
              <li className={`nav-item`}>
                <NavLink
                  exact
                  className={`nav-link`}
                  style={{ color: "#f6f6f3" }}
                  to={`/home`}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={`nav-link`}
                  style={{ color: "#f6f6f3" }}
                  to={`/about`}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={`nav-link`}
                  style={{ color: "#f6f6f3" }}
                  to={`/gallery`}
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={`nav-link`}
                  style={{ color: "#f6f6f3" }}
                  to={`/contact`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* navigation menus - end */}
        </div>
      </nav>
      {/* navigation bar - end */}
    </>
  );
}

export default Navigation;
