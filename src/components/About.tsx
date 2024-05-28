function About() {
  return (
    <div className="h-auto pl-12">
      <h1 className="mainHeading underline">A little about me</h1>
      {/* <h2 className="shadowHeading">About</h2> */}
      <div className="flex ml-8 overflow-hidden ">
        <div className="flex-col flex flex-1 mr-6 pr-10">
          <h3 className="text-2xl pt-10 pb-5"> Hello!</h3>
          <p className="text-2xl">
            My name is Ishan. I’m a junior from 🇮🇳. I'm a freelancer, an
            open-source enthusiast & a learner📕! I'm deeply passionate about
            software development & innovations. I have expertise in automation
            and expanding my horizon of knowledge in web development.
          </p>
          <div className="pt-3">
            <a
              className="text-4xl md:text-2xl"
              href="https://github.com/theishanbh"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="mailto:theishanbh@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="https://twitter.com/theishanbh"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="https://www.instagram.com/daspectro/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 justify-center">
          <h2 className="text-4xl pt-6 pb-5 font-bold"> My Skills</h2>
          <h3 className="text-xl pt-1 pb-1"> Web Dev </h3>
          <div className="w-2/3 h-4 bg-white rounded-md">
            <div className="w-4/5 h-full bg-pink-500"></div>
          </div>
          <h3> Python </h3>
          <div className="w-2/3 h-4 bg-white rounded-md">
            <div className="w-3/4 h-full bg-pink-500"></div>
          </div>
          <h3> C++ </h3>
          <div className="w-2/3 h-4 bg-white rounded-md">
            <div className=" w-4/5 h-full bg-pink-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
