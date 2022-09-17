// import styles
import styles from "../assets/css/Navigation.module.css";

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
            Loren Ipsum
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link active"
                  // aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav-link active"
                  // aria-current="page"
                  href="/gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="nav-link active"
                  // aria-current="page"
                  href="/contact"
                >
                  Contact
                </a>
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
