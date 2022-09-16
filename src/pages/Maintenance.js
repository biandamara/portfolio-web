// import components
// import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Maintenance.module.css";

function Maintenance() {
  return (
    <>
      {/* component - navigation start */}
      {/* <Navigation /> */}
      {/* component - navigation end */}

      {/* page - under maintenance start */}
      <div className={styles.screen}>
        <div className={styles.bacrground}>
          <h1>Coming Soon</h1>
        </div>
      </div>
      {/* page - under maintenance end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Maintenance;
