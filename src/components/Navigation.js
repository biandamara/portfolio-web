// import styles
import styles from "../assets/css/Navigation.module.css";

function Navigation() {
  return (
    <>
      {/* navigation bar start */}
      <div className={styles.container}>
        {/* brand start */}
        <a href="/">
          <h6>Logo</h6>
        </a>
        {/* brand end */}

        {/* navigation menus start*/}
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/gallery">Mini Gallery</a>
        <a href="/contact">Contact</a>
        {/* navigation menus end */}
      </div>
      {/* navigation bar end */}
    </>
  );
}

export default Navigation;
