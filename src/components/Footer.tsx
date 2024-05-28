import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="h-auto p-8 text-center">
      <p className="text-2xl font-bold md:text-xl">Want to connect?</p>
      <p className="text-2xl font-bold md:text-xl">My inbox is always open!</p>
      <div className=" flex gap-3 pt-4 justify-center items-center">
        <a
          className="text-4xl md:text-2xl"
          href="https://github.com/theishanbh"
        >
          <FontAwesomeIcon icon={faGithub} inverse size="lg" />
        </a>
        <a
          className="text-4xl md:text-2xl"
          href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/"
        >
          <FontAwesomeIcon icon={faLinkedin} inverse size="lg" />
        </a>
        <a className="text-4xl md:text-2xl" href="mailto:theishanbh@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} inverse size="lg" />
        </a>
        <a
          className="text-4xl md:text-2xl"
          href="https://twitter.com/theishanbh"
        >
          <FontAwesomeIcon icon={faTwitter} inverse size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
