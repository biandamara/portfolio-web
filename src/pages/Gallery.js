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
      <div className={styles.container}>
        {/* title start */}
        <h6>Mini Gallery</h6>
        {/* title end */}

        {/* container photos start */}
        <div className="row text-center">
          {/* photos - row 01 start */}
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246238/Portfolio%20Web/Gallery/Image_01_m3imfg.jpg"
              alt="Image 01"
            />
          </div>
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_02_ygxwlk.jpg"
              alt="Image 02"
            />
          </div>
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246233/Portfolio%20Web/Gallery/Image_03_vh5mgv.jpg"
              alt="Image 03"
            />
          </div>
        </div>
        {/* ptos - row 01 end */}

        {/* photos - row 02 start */}
        <div className="row text-center">
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_04_ljqw2u.jpg"
              alt="Image 04"
            ></img>
          </div>
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_05_ilaxrf.jpg"
              alt="Image 05"
            ></img>
          </div>
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_06_rx7f2q.jpg"
              alt="Image 06"
            ></img>
          </div>
        </div>
        {/* photos - row 02 end */}

        {/* photos - row 03 start */}
        <div className="row text-center">
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_07_krwqjn.jpg"
              alt="Image 07"
            ></img>
          </div>
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_08_wdtlmo.jpg"
              alt="Image 08"
            ></img>
          </div>
          <div className="col">
            <img
              className={styles.image}
              src="https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_09_ggtc36.jpg"
              alt="Image 09"
            ></img>
          </div>

          {/* photos - row 03 end*/}
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
