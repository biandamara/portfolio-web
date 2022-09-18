// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Contact.module.css";

function Contact() {
  return (
    <>
      {/* component - navigation start */}
      <Navigation />
      {/* component - navigation end */}

      {/* page - contact start */}
      <div className={`container ${styles.background}`}>
        <h6>Contact</h6>
        <hr />
      </div>
      {/* page - contact end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Contact;
