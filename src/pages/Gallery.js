// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Gallery.module.css";

function Gallery() {
  return (
    <>
      <div className={`${styles.gallery}`}>
        {/* component - navigation start */}
        <Navigation />
        {/* component - navigation end */}

        {/* page - gallery start */}
        <div className="container row">
          {/* title start */}
          <div className="col-4 text-center">
            <h1 className="">Mini Gallery</h1>
          </div>
          {/* title end */}

          {/* container photos start */}
          <div className="col">
            <div className="row row-cols-2 row-cols-lg-3 g-3 g-lg-3 text-center">
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246238/Portfolio%20Web/Gallery/Image_01_m3imfg.jpg"
                  alt="Image 01"
                  aria-hidden
                />
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_02_ygxwlk.jpg"
                  alt="Image 02"
                  aria-hidden
                />
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246233/Portfolio%20Web/Gallery/Image_03_vh5mgv.jpg"
                  alt="Image 03"
                  aria-hidden
                />
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_04_ljqw2u.jpg"
                  alt="Image 04"
                  aria-hidden
                ></img>
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_05_ilaxrf.jpg"
                  alt="Image 05"
                  aria-hidden
                ></img>
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246232/Portfolio%20Web/Gallery/Image_06_rx7f2q.jpg"
                  alt="Image 06"
                  aria-hidden
                ></img>
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246239/Portfolio%20Web/Gallery/Image_07_krwqjn.jpg"
                  alt="Image 07"
                  aria-hidden
                ></img>
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246234/Portfolio%20Web/Gallery/Image_08_wdtlmo.jpg"
                  alt="Image 08"
                  aria-hidden
                ></img>
              </div>
              <div className="col">
                <img
                  className={`${styles.image}`}
                  src="https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_09_ggtc36.jpg"
                  alt="Image 09"
                  aria-hidden
                ></img>
              </div>
            </div>
          </div>
          {/* container photos end */}
        </div>
        {/* page - gallery end */}

        {/* component - footer start */}
        <Footer />
        {/* component - footer end */}
      </div>
    </>
  );
}

export default Gallery;
