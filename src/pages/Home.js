// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Home.module.css";

function Home() {
  return (
    <>
      {/* component - navigation - start */}
      <Navigation />
      {/* component - navigation - end */}

      {/* body - start */}
      <body className={`${styles.body}`}>
        {/* header - start */}
        <div className={`container ${styles.header}`}>
          <h1>Home</h1>
          <hr />
        </div>
        {/* hearder - end */}

        {/* content - start */}
        <div className={`container ${styles.content}`}>
          <p>Hi, my name is...</p>
          <br />
          <h1>Bian Damara.</h1>
        </div>
        {/* content -  end */}
      </body>
      {/* body - end */}

      {/* component - footer - start */}
      <Footer />
      {/* component - footer - end */}
    </>
  );
}

export default Home;
