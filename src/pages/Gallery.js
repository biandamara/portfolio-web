import React, { useEffect } from "react";
import AOS from "aos";

// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Gallery.module.css";

function Gallery() {
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
        <header className={`container ${styles.header}`}>
          <h3>Mini Gallery</h3>
          <p
            className={`lh-base`}
            data-aos={`fade-right`}
            data-aos-duration={`1000`}
            data-aos-delay={`500`}
            data-aos-once={`true`}
          >
            A mountain isn't incredibly pretty – it's beautiful.
            <br />
          </p>
          <p
            data-aos={`fade-right`}
            data-aos-duration={`1000`}
            data-aos-delay={`800`}
            data-aos-once={`true`}
          >
            The shoes aren't really expensive – they're plush.
          </p>
          <hr />
        </header>
        {/* header - end */}

        {/* content - start */}
        <div className={`container ${styles.content}`}>
          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246238/Portfolio%20Web/Gallery/Image_01_m3imfg.jpg`}
              alt={`Image 01`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            />
          </div>

          <div className={`$styles.card`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_02_ygxwlk.jpg`}
              alt={`Image 02`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            />
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246233/Portfolio%20Web/Gallery/Image_03_vh5mgv.jpg`}
              alt={`Image 03`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            />
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_04_ljqw2u.jpg`}
              alt={`Image 04`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_05_ilaxrf.jpg`}
              alt={`Image 05`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_06_rx7f2q.jpg`}
              alt={`Image 06`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_07_krwqjn.jpg`}
              alt={`Image 07`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_08_wdtlmo.jpg`}
              alt={`Image 08`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_09_ggtc36.jpg`}
              alt={`Image 09`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246241/Portfolio%20Web/Gallery/Image_10_zwsh4k.jpg`}
              alt={`Image 10`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246236/Portfolio%20Web/Gallery/Image_11_rjoe8i.jpg`}
              alt={`Image 11`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_12_g1n6lo.jpg`}
              alt={`Image 12`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246241/Portfolio%20Web/Gallery/Image_13_urodua.jpg`}
              alt={`Image 13`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246237/Portfolio%20Web/Gallery/Image_14_vgraey.jpg`}
              alt={`Image 14`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246237/Portfolio%20Web/Gallery/Image_15_nhkb59.jpg`}
              alt={`Image 15`}
              data-aos={`fade-down`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246240/Portfolio%20Web/Gallery/Image_16_yujllo.jpg`}
              alt={`Image 16`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_17_keesni.jpg`}
              alt={`Image 17`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`500`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>

          <div className={`${styles.card}`}>
            <img
              src={`https://res.cloudinary.com/biandamara/image/upload/v1663246238/Portfolio%20Web/Gallery/Image_18_utnl67.jpg`}
              alt={`Image 18`}
              data-aos={`fade-down`}
              data-aos-duration={`1000`}
              data-aos-delay={`800`}
              data-aos-once={`true`}
              aria-hidden
            ></img>
          </div>
        </div>
        {/* content - end */}
      </body>
      {/* body -  end */}

      {/* component - footer -  start */}
      <Footer />
      {/* component - footer - end */}
    </>
  );
}

export default Gallery;
