function Footer() {
  return (
    <div className="h-auto p-8 text-center">
      <p className="text-2xl font-bold md:text-xl">Want to connect?</p>
      <p className="text-2xl font-bold md:text-xl">My inbox is always open!</p>
      <div className="mt-5 pt-4">
        <a
          className="text-4xl md:text-2xl"
          href="https://github.com/theishanbh"
        >
          <i className="fab fa-github text-blue-400 pr-12 md:pr-6 md:pr-4 hover:text-blue-500"></i>
        </a>
        <a
          className="text-4xl md:text-2xl"
          href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/"
        >
          <i className="fab fa-linkedin text-blue-400 pr-12 md:pr-6 md:pr-4 hover:text-blue-500"></i>
        </a>
        <a className="text-4xl md:text-2xl" href="mailto:theishanbh@gmail.com">
          <i className="fas fa-envelope text-blue-400 pr-12 md:pr-6 md:pr-4 hover:text-blue-500"></i>
        </a>
        <a
          className="text-4xl md:text-2xl"
          href="https://twitter.com/theishanbh"
        >
          <i className="fab fa-twitter text-blue-400 pr-12 md:pr-6 md:pr-4 hover:text-blue-500"></i>
        </a>
        <a
          className="text-4xl md:text-2xl"
          href="https://www.instagram.com/daspectro/"
        >
          <i className="fab fa-instagram text-blue-400 pr-12 md:pr-6 md:pr-4 hover:text-blue-500"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
