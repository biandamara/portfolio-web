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
      <body className={`px-3 py-3 ${styles.body}`}>
        {/* header - start */}
        <div className={`container ${styles.header}`}>
          <h3>Home</h3>
          <hr />
        </div>
        {/* hearder - end */}

        {/* content - start */}
        <div className={`container ${styles.content}`}>
          <h1>{"// Hello, World!"}</h1>
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
