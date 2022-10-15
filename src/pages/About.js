// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import styles
import styles from "../assets/css/About.module.css";

function About() {
  return (
    <>
      {/* component - navigation start */}
      <Navigation />
      {/* component - navigation end */}

      {/* body start */}
      <div className={`${styles.body}`}>
        {/* header start */}
        <div className={`container ${styles.header}`}>
          <h1>About</h1>
          <hr />
        </div>
        {/* header end */}

        {/* content - start */}
        <div className={`container ${styles.content}`}>
          <div className={`row row-cols-1 row-cols-lg-2`}>
            {/* content left side - start */}
            <div className={`col col-lg-4 ${styles.left}`}>
              <img
                src="https://res.cloudinary.com/biandamara/image/upload/v1665743927/Portfolio%20Web/Icons/IMG_0239_hsgxtr.jpg"
                alt=""
              />
            </div>
            {/* content left side - end */}

            {/* content right side - start */}
            <div className={`col col-lg-8 ${styles.right}`}>
              <h1>So, how am I and what I do?</h1>
              <br />
              <p>
                "My name is <b>Bian Damara</b>. I'm a Front-end Developer who
                has expertise in the use of HTML, CSS, JavaScript, GIT, Node JS,
                Express JS, PostgreSQL, React JS, Next JS, and Redux JS, and
                also always learning to develop my abilities and potential for
                technological advancements. I'm very interested in new
                challenges and excited when there is an opportunity to work on a
                project around web development."
              </p>
              <br />
              <div className={`text-center ${styles.logos}`}>
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/html_p9ksca.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735727/Portfolio%20Web/Icons/css_mfydus.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735727/Portfolio%20Web/Icons/javascript_rn4mqp.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/git_etdhqk.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/node_ufkqsb.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/express_ek4xho.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/postgresql_h006xx.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735729/Portfolio%20Web/Icons/react_pw5srt.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/next_ul8vjc.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/redux_gbcoub.png"
                  alt=""
                />
              </div>
              <br />
              <p>
                "In my free time, I usually do travel and photography.
                Photography has always been one of my favorite hobbies. When I
                take pictures, it's like seeing things from a new perspective
                literally and figuratively. Thing about the camera and the lens
                is that it lets you see people, places, etc. from a whole new
                perspective and it helps to see things from a different view.
                From photography, I realized that getting a different view of
                things means you have a more open mind to the world."
                <br />
              </p>
              <br />
              <button>Mini Gallery</button>
            </div>
            {/* content left side - end */}
          </div>
        </div>
        {/* content end */}
      </div>
      {/* body end */}

      {/* component - footer start */}
      <Footer />
      {/* component - footer end */}
    </>
  );
}

export default About;
