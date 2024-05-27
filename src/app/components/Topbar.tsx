function Topbar() {
  return (
    <div className="topbar">
      <div className="left">
        <button className="resumeButton">
          {" "}
          <a
            href="https://drive.google.com/file/d/1hULNzoyZQZCSZ_lLAxc4ENpoLsjQjSiJ/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            RESUME{" "}
          </a>
        </button>
      </div>
      <div className="right">
        <div className="links">
          <a href="https://github.com/theishanbh">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:theishanbh@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://twitter.com/theishanbh">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/daspectro/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
