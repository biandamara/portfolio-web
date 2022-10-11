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

      {/* header start */}
      <div className={`container ${styles.header}`}>
        <h1>Home</h1>
        <hr />
      </div>
      {/* hearder end */}

      {/* page - home start */}
      <div className={`container ${styles.page}`}>
        <p>Hi, my name is...</p>
        <h1>Bian Damara</h1>
      </div>
      {/* page - home end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Home;
