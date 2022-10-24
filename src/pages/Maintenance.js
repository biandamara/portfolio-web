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
      <div className={styles.background}>
        {/* text start */}
        <div className={styles.box}>
          <p>
            {"//"} we're sorry!
            <br />
            <br />
            <br />
            this page is down
            <br />
            for maintenance.
            <br />
            <br />
            {":("}
          </p>
        </div>
        {/* text end */}
      </div>
      {/* page - under maintenance end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Maintenance;
