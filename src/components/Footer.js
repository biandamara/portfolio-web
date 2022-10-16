// import styles
import styles from "../assets/css/Footer.module.css";

function Footer() {
  return (
    <>
      {/* footer - start */}
      <footer className={styles.footer}>
        <div className={`row`}>
          <div className={`col`}>
            {/* instagram - start */}
            <a className={`px-5`} href="https://www.instagram.com/biandamara/">
              <img
                src="https://res.cloudinary.com/biandamara/image/upload/v1663365224/Portfolio%20Web/Icons/instagram_npe7cg.png"
                alt="Instagram"
                aria-hidden
              ></img>
              {/* instagram - end */}
            </a>

            {/* linkedin - start */}
            <a
              className={`px-5`}
              href="https://www.linkedin.com/in/bian-damara-218270151/"
            >
              <img
                src="https://res.cloudinary.com/biandamara/image/upload/v1663365224/Portfolio%20Web/Icons/linkedin_cyfjuo.png"
                alt="LinkedIn"
                aria-hidden
              ></img>
            </a>
            {/* linkedin - end */}

            {/* github - start */}
            <a className={`px-5`} href="https://github.com/biandamara">
              <img
                src="https://res.cloudinary.com/biandamara/image/upload/v1663365224/Portfolio%20Web/Icons/github_hzsub0.png"
                alt="GitHub"
                aria-hidden
              ></img>
            </a>
            {/* github - end */}
          </div>
        </div>
      </footer>
      {/* footer - end */}
    </>
  );
}

export default Footer;
