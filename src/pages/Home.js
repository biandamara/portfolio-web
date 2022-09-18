// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.page}>
        {/* component - navigation start */}
        <Navigation />
        {/* component - navigation end */}

        {/* background start */}
        <div className={`container ${styles.background}`}>
          <h1>Home</h1>
        </div>
        {/* background end */}

        {/* page - home start */}
        <div className={`container ${styles.container}`}></div>
        {/* page - home end */}

        {/* component - footer start */}
        <Footer />
        {/* component - footer end */}
      </div>
    </>
  );
}

export default Home;
