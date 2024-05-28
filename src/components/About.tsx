import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="h-auto p-6 md:pl-12 md:pb-10 md:mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold pb-2 underline">
        A little about me
      </h1>
      {/* <h2 className="shadowHeading">About</h2> */}
      <div className="flex md:ml-8 overflow-hidden flex-col md:flex-row ">
        <div className="flex-col flex flex-1 mr-6 pr-10 mb-4 sm:mb-0">
          <h3 className="text-5xl  pt-10 pb-5"> Hello!</h3>
          <p className="text-xl">
            My name is Ishan. I’m a senior from 🇮🇳. I&apos;m a freelancer, an
            open-source enthusiast & a learner📕! I&apos;m deeply passionate
            about software development & innovations. I have expertise in
            automation and expanding my horizon of knowledge in web development.
          </p>
          <div className="pt-3 flex gap-3">
            <a
              className="text-4xl md:text-2xl"
              href="https://github.com/theishanbh"
            >
              <FontAwesomeIcon icon={faGithub} inverse size="xl" />
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="mailto:theishanbh@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} inverse size="xl" />
            </a>
            <a
              className="text-4xl md:text-2xl"
              href="https://twitter.com/theishanbh"
            >
              <FontAwesomeIcon icon={faTwitter} inverse size="xl" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-2xl justify-center">
          <h2 className=" text-3xl md:text-5xl pt-6 pb-5 font-extrabold">
            {" "}
            My Skills
          </h2>
          <h3 className="text-xl md:text-2xl pt-1 pb-1"> Web Dev </h3>
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
