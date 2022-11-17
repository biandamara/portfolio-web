import React, { useEffect } from "react";
import AOS from "aos";

// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Portfolio.module.css";

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* component - navigation - start */}
      <Navigation />
      {/* component - navigation - end */}

      {/* body - start */}
      <body className={`px-3 py-3 ${styles.body}`}>
        {/* header - start */}
        <div className={`container ${styles.header}`}>
          <h3>Portfolio</h3>
          <hr />
        </div>
        {/* header - end */}

        {/* content - start */}
        <div className={`container ${styles.content}`}>
          <div className={`d-grid gap-3`}>
            {/* card - start */}
            <div
              className={`card ${styles.card}`}
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`0`}
              data-aos-once={`true`}
            >
              <div className={`card-body d-flex justify-content-between`}>
                <div>Binar Academy - Rock Paper Scissors</div>
                <div className={`${styles.link}`}>
                  <a
                    className={`nav-link disabled`}
                    href={`https://www.rock-paper-scissors-bd.netlify.app/`}
                  >
                    Website
                  </a>
                  <a href={`https://github.com/biandamara/binar-challenge-4`}>
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`card ${styles.card}`}
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`200`}
              data-aos-once={`true`}
            >
              <div className={`card-body d-flex justify-content-between`}>
                <div>Binar Academy - Game Portal Website</div>
                <div className={`${styles.link}`}>
                  <a
                    className={`nav-link disabled`}
                    href={`https://team2-chapter11-frontend.herokuapp.com/`}
                  >
                    Website
                  </a>
                  <a href={`https://github.com/biandamara/binar-challenge-11`}>
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`card ${styles.card}`}
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`400`}
              data-aos-once={`true`}
            >
              <div className={`card-body d-flex justify-content-between`}>
                <div>Binar Academy - Mini Store Website</div>
                <div className={`${styles.link}`}>
                  <a
                    className={`nav-link disabled`}
                    href={`https://www.mini-store-bd.netlify.com/`}
                  >
                    Website
                  </a>
                  <a href={`https://github.com/biandamara/front-end-mock-test`}>
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`card ${styles.card}`}
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`600`}
              data-aos-once={`true`}
            >
              <div className={`card-body d-flex justify-content-between`}>
                <div>My Portfolio Website</div>
                <div className={`${styles.link}`}>
                  <a href={`https://biandamara.netlify.app`}>Website</a>
                  <a href={`https://github.com/biandamara/portfolio-web`}>
                    Code
                  </a>
                </div>
              </div>
            </div>
            {/* card - end */}
          </div>
        </div>
        {/* content - end */}
      </body>
      {/* body - end */}

      {/* component - footer - start */}
      <Footer />
      {/* component - footer - end */}
    </>
  );
}

export default Portfolio;
