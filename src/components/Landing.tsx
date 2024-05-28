"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Landing() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Freelancer", "Learner"],
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center mb-24">
      <div className="flex flex-col ml-10 md:p-0 flex-[0.6] sm:mb-40">
        <h1 className=" mt-10 md:mt-36 font-extrabold text-4xl md:text-5xl text-cyan-400 ">
          Hi there, I&apos;m{" "}
        </h1>
        <h2 className=" text-6xl md:text-7xl font-extrabold pb-4">
          Ishan Bhardwaj
        </h2>
        <h3 className="text-2xl md:text-4xl font-extrabold ">
          A Passionate <span className=" text-[#0f0]" ref={el}></span>
        </h3>
      </div>
      <div className="flex-[0.3]">
        <img src="/avatar.png" className="p-10 md:p-0" />
      </div>
    </div>
  );
}

export default Landing;
