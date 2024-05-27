function About() {
  return (
    <div className="about">
      <h1 className="mainHeading">A little about me</h1>
      {/* <h2 className="shadowHeading">About</h2> */}
      <div className="split">
        <div className="leftSection">
          <h3> Hello!</h3>
          <p>
            My name is Ishan. I’m a junior from 🇮🇳. I'm a freelancer, an
            open-source enthusiast & a learner📕! I'm deeply passionate about
            software development & innovations. I have expertise in automation
            and expanding my horizon of knowledge in web development.
          </p>
          <div className="links">
            <a href="https://github.com/theishanbh">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:theishanbh@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://twitter.com/theishanbh">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/daspectro/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="rightSection">
          <h2> My Skills</h2>
          <h3> Web Dev </h3>
          <div className="progress">
            <div className="progress__fill__web"></div>
          </div>
          <h3> Python </h3>
          <div className="progress">
            <div className="progress__fill__python"></div>
          </div>
          <h3> C++ </h3>
          <div className="progress">
            <div className="progress__fill__cpp"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
