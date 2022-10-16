// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/Contact.module.css";

function Contact() {
  return (
    <>
      {/* component - navigation - start */}
      <Navigation />
      {/* component - navigation - end */}

      {/* body - start */}
      <body className={`px-3 py-3 ${styles.body}`}>
        {/* header - start */}
        <header className={`container`}>
          <h3>Contact</h3>
          <hr />
        </header>
        {/* header - end */}

        {/* content container - start */}
        <div className={`container`}>
          <div className={`row row-cols-1 row-cols-lg-2 g-5`}>
            {/* content left - start */}
            <div className={`col`}>
              <h1>Say, Hi!</h1>
            </div>
            {/* content left - end */}

            {/* content right - start */}
            <div className={`col ${styles.contact}`}>
              {/* contect right 01 - start */}
              <div>
                <h3>Get in touch</h3>

                <br />

                <p className={`lh-base`}>
                  You can contact me using this contact form below.
                </p>

                <br />
                <br />

                <form>
                  <input
                    type={`text`}
                    name={`name`}
                    placeholder={`Name`}
                  ></input>

                  <br />
                  <br />

                  <input
                    type={`text`}
                    name={`name`}
                    placeholder={`E-mail`}
                  ></input>

                  <br />
                  <br />

                  <textarea
                    rows={`10`}
                    type={`text`}
                    name={`comment`}
                    form={`usrform`}
                    placeholder={`Message`}
                  ></textarea>

                  <br />
                  <br />
                  <br />

                  <button>Submit</button>
                </form>
              </div>
              {/* contect right 01 - end */}

              <br />
              <br />
              <br />
              <br />
              <br />

              <hr />

              {/* contect right 02 - start */}
              <div>
                <h3>For more information</h3>

                <br />

                <p className={`lh-base`}>
                  Please go visit my social media account.
                </p>

                <br />

                {/* social media - start */}
                <div className={`row ${styles.social}`}>
                  {/* link e-mail - start */}
                  <a
                    className={`row row-cols-3 row-cols-lg-3 p-3 align-items-center`}
                    href={`mailto: bian.damara@gmail.com/`}
                  >
                    <div className={`col-sm-2 col-lg-2 text-center`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1663585979/Portfolio%20Web/Icons/e-mail_cdxvra.png`}
                        alt={``}
                      />
                    </div>
                    <p className={`col`}>E-mail</p>
                  </a>
                  {/* link e-mail - end */}

                  {/* link instagram - start */}
                  <a
                    className={`row row-cols-3 row-cols-lg-3 p-3 align-items-center`}
                    href={`https://www.instagram.com/biandamara/`}
                  >
                    <div className={`col-sm-2 col-lg-2 text-center`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1663585013/Portfolio%20Web/Icons/instagram-round_mcalxj.png`}
                        alt={``}
                      />
                    </div>
                    <p className={`col`}>Instagram</p>
                  </a>
                  {/* link instagram - end */}

                  {/* link linkedin - start */}
                  <a
                    className={`row row-cols-3 row-cols-lg-3 p-3 align-items-center`}
                    href={`https://www.linkedin.com/in/bian-damara-218270151/`}
                  >
                    <div className={`col-sm-2 col-lg-2 text-center`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1663585012/Portfolio%20Web/Icons/linkedin-round_lltwik.png`}
                        alt={``}
                      />
                    </div>
                    <p className={`col`}>LinkedIn</p>
                  </a>
                  {/* link linkedin - end */}

                  {/* link github - start */}
                  <a
                    className={`row row-cols-3 row-cols-lg-3 p-3 align-items-center`}
                    href={`https://github.com/biandamara`}
                  >
                    <div className={`col-sm-2 col-lg-2 text-center`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1663585013/Portfolio%20Web/Icons/github-round_r5b7w8.png`}
                        alt={``}
                      />
                    </div>
                    <p className={`col`}>GitHub</p>
                  </a>
                  {/* link github - end */}
                </div>
                {/* social media - end */}
              </div>
              {/* contect right 02 - end */}
              {/* content right - end */}
            </div>
          </div>
          {/* content container - end */}
        </div>
      </body>
      {/* body end */}

      {/* component - footer - start */}
      <Footer />
      {/* component - footer - end */}
    </>
  );
}

export default Contact;
