// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Gallery.module.css";

function Gallery() {
  return (
    <>
      {/* component - navigation start */}
      <Navigation />
      {/* component - navigation end */}

      {/* page - gallery start */}
      <div className={`container ${styles.gallery}`}>
        {/* title start */}
        <h1>Mini Gallery</h1>
        <p>
          A mountain isn’t incredibly pretty – it’s beautiful.
          <br />
          The shoes aren’t really expensive – they’re plush.
        </p>
        {/* <br />
          The donuts aren’t exceedingly delicious – they’re delectable. */}
        <hr />
        {/* title end */}

        {/* container photos start */}
        <div className={styles.container}>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246238/Portfolio%20Web/Gallery/Image_01_m3imfg.jpg"
              alt="Image 01"
              aria-hidden
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_02_ygxwlk.jpg"
              alt="Image 02"
              aria-hidden
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246233/Portfolio%20Web/Gallery/Image_03_vh5mgv.jpg"
              alt="Image 03"
              aria-hidden
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_04_ljqw2u.jpg"
              alt="Image 04"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_05_ilaxrf.jpg"
              alt="Image 05"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_06_rx7f2q.jpg"
              alt="Image 06"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_07_krwqjn.jpg"
              alt="Image 07"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_08_wdtlmo.jpg"
              alt="Image 08"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_09_ggtc36.jpg"
              alt="Image 09"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246241/Portfolio%20Web/Gallery/Image_10_zwsh4k.jpg"
              alt="Image 10"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246236/Portfolio%20Web/Gallery/Image_11_rjoe8i.jpg"
              alt="Image 11"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_12_g1n6lo.jpg"
              alt="Image 12"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246241/Portfolio%20Web/Gallery/Image_13_urodua.jpg"
              alt="Image 13"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246237/Portfolio%20Web/Gallery/Image_14_vgraey.jpg"
              alt="Image 14"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246237/Portfolio%20Web/Gallery/Image_15_nhkb59.jpg"
              alt="Image 15"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246240/Portfolio%20Web/Gallery/Image_16_yujllo.jpg"
              alt="Image 16"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_17_keesni.jpg"
              alt="Image 17"
              aria-hidden
            ></img>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246238/Portfolio%20Web/Gallery/Image_18_utnl67.jpg"
              alt="Image 18"
              aria-hidden
            ></img>
          </div>
        </div>
        {/* container photos end */}
      </div>
      {/* page - gallery end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Gallery;
