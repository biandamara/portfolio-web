// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/About.module.css";

function About() {
  return (
    <>
      {/* component - navigation start */}
      <Navigation />
      {/* component - navigation end */}

      {/* body start */}
      <div className={`${styles.body}`}>
        {/* header start */}
        <div className={`container ${styles.header}`}>
          <h1>About</h1>
          <hr />
        </div>
        {/* header end */}

        {/* content start */}
        <div className={`container ${styles.content}`}>
          <h1>So, how am I?</h1>
          <br />
          <p>
            "I'm a psychology graduate who is interested in learning about human
            behavior and technology. My hobby is photography. landscape
            photography and street photography."
          </p>
        </div>
        {/* content end */}
      </div>
      {/* body end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default About;
