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
      <div
        className={styles.background}
        style={{
          // backgroundImage: `url("https://res.cloudinary.com/biandamara/image/upload/v1663393608/Portfolio%20Web/Background/background_egbvyb.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        {/* text start */}
        <div className={styles.box}>
          <p>{"//"} coming soon</p>
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
