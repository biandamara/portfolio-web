import React, { useEffect } from "react";
import AOS from "aos";

// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/About.module.css";

function About() {
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
          <h3>About Me</h3>
          <hr />
        </div>
        {/* header - end */}

        {/* content - start */}
        <div className={`container ${styles.content}`}>
          <div>
            <div className={`row row-cols-1 row-cols-lg-2 g-5`}>
              {/* content left side - start */}
              <div className={`col col-lg-4 ${styles.left}`}>
                <img
                  src={`https://res.cloudinary.com/biandamara/image/upload/v1665939304/Portfolio%20Web/profile_k3pg7e.png`}
                  alt={``}
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                />
              </div>
              {/* content left side - end */}

              {/* content right side - start */}
              <div className={`col col-lg-8 ${styles.right}`}>
                {/* job title - start */}
                <h2
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  Front-End Developer
                </h2>
                {/* job title - end */}

                <br />
                <br />
                <br />

                {/* full name - start */}
                <h1 data-aos="zoom-out" data-aos-duration="1000">
                  BIAN DAMARA
                </h1>
                {/* full name - end */}

                <br />
                <br />
                <br />

                {/* about me - start */}
                <p
                  className={`lh-base`}
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  I'm a Front-end Developer who has expertise in the use of
                  HTML, CSS, JavaScript, GIT, Node JS, Express JS, PostgreSQL,
                  React JS, Next JS, and Redux JS, and also always learning to
                  develop my abilities and potential for technological
                  advancements. I'm very interested in new challenges and
                  excited when there is an opportunity to work on a project
                  around web development.
                </p>
                {/* about me - end */}

                <br />

                <div className={`text-center ${styles.logos}`}>
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/html_p9ksca.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735727/Portfolio%20Web/Icons/css_mfydus.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="1200"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735727/Portfolio%20Web/Icons/javascript_rn4mqp.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="1400"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/git_etdhqk.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="1600"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/node_ufkqsb.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="1800"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/express_ek4xho.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="2000"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/postgresql_h006xx.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="2200"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735729/Portfolio%20Web/Icons/react_pw5srt.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="2400"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/next_ul8vjc.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="2600"
                  />
                  <img
                    src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/redux_gbcoub.png`}
                    alt={``}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="2800"
                  />
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className={`${styles.interest}`}>
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                Interested
              </h2>
              <div className={`row row-cols-1 row-cols-lg-3 g-5`}>
                {/* psychology - start */}
                <div className={`col`}>
                  <hr />
                  <div className={`row  mb-3`}>
                    <h3
                      className={`col`}
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="1000"
                    >
                      Psychology
                    </h3>
                    <div className={`col text-end`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1665939993/Portfolio%20Web/Icons/psychology_nexc1x.png`}
                        alt={``}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                      />
                    </div>
                  </div>
                  <p
                    className={`lh-base`}
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    I'm a psychology graduate. I'm interested in studying human
                    behavior and the factors that influence it. Studying
                    psychology has helped me to understand myself better, and
                    understand psychology why people act like they do in certain
                    situations. I like to understand what motivates us, what
                    makes us happy, what causes us to stress, and how we can be
                    happier and not stressed.
                  </p>
                </div>
                {/* psychology - end */}

                {/* treveling - start */}
                <div className={`col`}>
                  <hr />
                  <div className={`row  mb-3`}>
                    <h3
                      className={`col`}
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="1000"
                    >
                      Traveling
                    </h3>
                    <div className={`col text-end`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1665939993/Portfolio%20Web/Icons/footstep_f7sv5i.png`}
                        alt={``}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                      />
                    </div>
                  </div>
                  <p
                    className={`lh-base`}
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    The adventure of a lifetime or just wanting to connect with
                    someone new, traveling can be a very rewarding experience.
                    It's also something I can do casually, at my own pace, with
                    the people I'm friends with. I also really enjoy visiting
                    new places, learning local history and culture, and tasting
                    local food. The best travel experiences are those where I
                    feel connected to people while I'm on the road. That's what
                    travel is like for me: a journey.
                  </p>
                </div>
                {/* treveling - end */}

                {/* photography - start */}
                <div className={`col`}>
                  <hr />
                  <div className={`row  mb-3`}>
                    <h3
                      className={`col`}
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="1000"
                    >
                      Photography
                    </h3>
                    <div className={`col text-end`}>
                      <img
                        src={`https://res.cloudinary.com/biandamara/image/upload/v1665939993/Portfolio%20Web/Icons/camera_fa9lpn.png`}
                        alt={``}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                      />
                    </div>
                  </div>
                  <p
                    className={`lh-base`}
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    Photography has always been one of my favorite hobbies. When
                    I take pictures, it's like seeing things from a new
                    perspective literally and figuratively. Thing about the
                    camera and the lens is that it lets you see people, places,
                    etc. from a whole new perspective and it helps to see things
                    from a different view. From photography, I realized that
                    getting a different view of things means you have a more
                    open mind to the world.
                  </p>
                </div>
                {/* photography - end */}
              </div>
            </div>
            {/* content left side - end */}
          </div>
        </div>
        {/* content - end */}
      </body>
      {/* body - end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default About;
