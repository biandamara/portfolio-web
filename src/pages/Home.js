// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Home.module.css";

function Home() {
  return (
    <>
      {/* component - navigation start */}
      <Navigation />
      {/* component - navigation end */}

      {/* background start */}
      <div className={`container ${styles.home}`}>
        <h1>Home</h1>
        <hr />
      </div>
      {/* background end */}

      {/* page - home start */}
      <div className={`container ${styles.container}`}></div>
      {/* page - home end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Home;
