function Topbar() {
  return (
    <div className="h-20 bg-black text-black sticky top-0 z-50 flex">
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
      <div className="flex flex-1 w-1/2 h-full items-center tablet:hidden">
        <div className="flex h-full justify-end">
          <a
            className="text-2xl pr-2 pt-2"
            href="https://github.com/theishanbh"
          >
            <i className="fab fa-github text-blue-500 hover:text-blue-700"></i>
          </a>
          <a
            className="text-2xl pr-2 pt-2"
            href="https://www.linkedin.com/in/ishan-bhardwaj-6691a621a/"
          >
            <i className="fab fa-linkedin text-blue-500 hover:text-blue-700"></i>
          </a>
          <a className="text-2xl pr-2 pt-2" href="mailto:theishanbh@gmail.com">
            <i className="fas fa-envelope text-blue-500 hover:text-blue-700"></i>
          </a>
          <a
            className="text-2xl pr-2 pt-2"
            href="https://twitter.com/theishanbh"
          >
            <i className="fab fa-twitter text-blue-500 hover:text-blue-700"></i>
          </a>
          <a
            className="text-2xl pr-2 pt-2"
            href="https://www.instagram.com/daspectro/"
          >
            <i className="fab fa-instagram text-blue-500 hover:text-blue-700"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
