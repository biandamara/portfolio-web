import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import AOS from "aos";

// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import "react-toastify/dist/ReactToastify.css";
import styles from "../assets/css/Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.warn("Please fill out the form!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_k946nxk",
          "template_7xd9ghr",
          form.current,
          "H5nY49c7aP7tp5DwI"
        )
        .then(
          (result) => {
            toast.success("Your message has been sent!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          },
          (error) => {
            toast.error("Your message can't be sent!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        );
    }
  };

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
              <h1
                data-aos={`fade-right`}
                data-aos-duration={`1000`}
                data-aos-once={`true`}
              >
                Say, Hi!
              </h1>
            </div>
            {/* content left - end */}

            {/* content right - start */}
            <div className={`col ${styles.contact}`}>
              {/* contect right 01 - start */}
              <div>
                <h3
                  data-aos={`fade-down`}
                  data-aos-duration={`1000`}
                  data-aos-delay={`500`}
                  data-aos-once={`true`}
                >
                  Get in touch
                </h3>

                <br />

                <p
                  className={`lh-base`}
                  data-aos={`fade-left`}
                  data-aos-duration={`1000`}
                  data-aos-delay={`1000`}
                  data-aos-once={`true`}
                >
                  You can contact me using this contact form below.
                </p>

                <br />
                <br />

                {/* contact form - start */}
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  data-aos={`fade-left`}
                  data-aos-duration={`1000`}
                  data-aos-delay={`1500`}
                  data-aos-once={`true`}
                >
                  {/* input name - start */}
                  <input
                    id={`from_name`}
                    name={`from_name`}
                    type={`text`}
                    value={name}
                    placeholder={`Name`}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  {/* input name - end */}

                  <br />
                  <br />

                  {/* input e-mail - start */}
                  <input
                    id={`from_email`}
                    name={`from_email`}
                    type={`email`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder={`E-mail`}
                  ></input>
                  {/* input e-mail - end */}

                  <br />
                  <br />

                  {/* input message - start */}
                  <textarea
                    id={`message`}
                    name={`message`}
                    type={`text`}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder={`Message`}
                    rows={`10`}
                  ></textarea>
                  {/* input message - end */}

                  <br />
                  <br />
                  <br />

                  {/* button submit - start */}
                  <button
                    className={`${styles.button}`}
                    type={`submit`}
                    value={`send`}
                    onClick={handleSubmit}
                    data-aos={`fade-left`}
                    data-aos-duration={`1000`}
                    data-aos-delay={`1500`}
                    data-aos-once={`true`}
                  >
                    Submit
                  </button>
                  {/* button submit - end */}
                </form>
                {/* contact form - end */}
              </div>
              {/* contect right 01 - end */}

              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />

              <br />
              <br />
              <br />
              <br />
              <br />

              <hr />

              {/* contect right 02 - start */}
              <div>
                <h3
                  data-aos={`fade-down`}
                  data-aos-duration={`1000`}
                  data-aos-delay={`500`}
                  data-aos-once={`true`}
                >
                  For more information
                </h3>

                <br />

                <p
                  className={`lh-base`}
                  data-aos={`fade-left`}
                  data-aos-duration={`1000`}
                  data-aos-delay={`1000`}
                  data-aos-once={`true`}
                >
                  Please go visit my social media account.
                </p>

                <br />

                {/* social media - start */}
                <div className={`row ${styles.social}`}>
                  {/* link e-mail - start */}
                  <a
                    className={`row row-cols-3 row-cols-lg-3 p-3 align-items-center`}
                    href={`mailto: bian.damara@gmail.com`}
                    data-aos={`fade-left`}
                    data-aos-duration={`1000`}
                    data-aos-delay={`1500`}
                    data-aos-once={`true`}
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
                    data-aos={`fade-left`}
                    data-aos-duration={`1000`}
                    data-aos-delay={`1700`}
                    data-aos-once={`true`}
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
                    data-aos={`fade-left`}
                    data-aos-duration={`1000`}
                    data-aos-delay={`1900`}
                    data-aos-once={`true`}
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
                    data-aos={`fade-left`}
                    data-aos-duration={`1000`}
                    data-aos-delay={`2100`}
                    data-aos-once={`true`}
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
