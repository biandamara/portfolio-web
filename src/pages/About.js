// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/About.module.css";

function About() {
  return (
    <>
      <div className={styles.page}>
        {/* component - navigation start */}
        <Navigation />
        {/* component - navigation end */}

        {/* page - about start */}
        <div className={`container ${styles.background}`}>
          <h1>About</h1>
        </div>
        {/* page - about end */}

        {/* component - footer start */}
        <Footer />
        {/* component - footer end */}
      </div>
    </>
  );
}

export default About;
