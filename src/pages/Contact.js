// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Contact.module.css";

function Contact() {
  return (
    <>
      {/* component - navigation start */}
      <Navigation />
      {/* component - navigation end */}

      {/* page - contact start */}
      <div className={`container ${styles.container}`}>
        {/* title start */}
        <h1>Contact</h1>
        <hr />
        {/* title end */}

        {/* content container start */}
        <div className="row">
          {/* content left start */}
          <div className="col"></div>
          {/* content left end */}

          {/* content right start */}
          <div className={`col ${styles.contact}`}>
            <p className="pt-3 pb-3">
              For more information, you can contact me or
              <br />
              please go visit my social media account.
            </p>

            <div className={`row ${styles.social}`}>
              <div className="row row-cols-2 row-cols-lg-2 p-3 align-items-center">
                <div className="col-lg-1">
                  <img
                    src="https://res.cloudinary.com/biandamara/image/upload/v1663585979/Portfolio%20Web/Icons/e-mail_cdxvra.png"
                    alt="E-mail"
                  />
                </div>
                <p className="col">{"E-mail"}</p>
              </div>

              <div className="row row-cols-2 row-cols-ms-2 row-cols-lg-2 p-3 align-items-center">
                <div className="col-lg-1">
                  <img
                    src="https://res.cloudinary.com/biandamara/image/upload/v1663585013/Portfolio%20Web/Icons/instagram-round_mcalxj.png"
                    alt="Instagram"
                  />
                </div>
                <p className="col">Instagram</p>
              </div>

              <div className="row row-cols-2 row-cols-ms-2 row-cols-lg-2 p-3 align-items-center">
                <div className="col-lg-1">
                  <img
                    src="https://res.cloudinary.com/biandamara/image/upload/v1663585012/Portfolio%20Web/Icons/linkedin-round_lltwik.png"
                    alt="LinkedIn"
                  />
                </div>
                <p className="col">LinkedIn</p>
              </div>

              <div className="row row-cols-2 row-cols-lg-2 p-3 align-items-center">
                <div className="col-lg-1">
                  <img
                    src="https://res.cloudinary.com/biandamara/image/upload/v1663585013/Portfolio%20Web/Icons/github-round_r5b7w8.png"
                    alt="GitHub"
                  />
                </div>
                <p className="col">GitHub</p>
              </div>
            </div>
            {/* content right end */}
          </div>
          {/* content container end */}
        </div>
      </div>
      {/* page - contact end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default Contact;
