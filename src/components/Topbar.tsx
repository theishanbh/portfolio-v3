import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  return (
    <div className="h-20 bg-black text-black sticky top-0 z-50 flex mb-2">
      <div className="flex flex-1 w-1/2 h-full items-center pl-20 tablet:justify-center tablet:pl-0">
        <button className="bg-white border-none text-black py-2 px-4 text-center no-underline text-base font-bold rounded-full cursor-pointer">
          {" "}
          <a
            href="https://drive.google.com/file/d/1hULNzoyZQZCSZ_lLAxc4ENpoLsjQjSiJ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline hover:bg-blue-600 bg-white"
          >
            {" "}
            RESUME{" "}
          </a>
        </button>
      </div>
      <div className="flex flex-1 w-1/2 h-full justify-end items-center">
        <div className="flex pb-2 gap-2 h-full items-center justify-end pr-8">
          <a
            className="text-2xl pr-2 pt-2"
            href="https://github.com/theishanbh"
          >
            <FontAwesomeIcon icon={faGithub} inverse size="lg" />
          </a>
          <a
            className="text-2xl pr-2 pt-2"
            href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/"
          >
            <FontAwesomeIcon icon={faLinkedin} inverse size="lg" />
          </a>
          <a className="text-2xl pr-2 pt-2" href="mailto:theishanbh@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} inverse size="lg" />
          </a>
          <a
            className="text-2xl pr-2 pt-2"
            href="https://twitter.com/theishanbh"
          >
            <FontAwesomeIcon icon={faTwitter} inverse size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
