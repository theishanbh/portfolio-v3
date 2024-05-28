"use client";

import Image from "next/image";
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
    <div className=" flex justify-center items-center mb-24">
      <div className="flex flex-col flex-[0.6]  mb-40">
        <h1 className=" mt-36 font-extrabold text-5xl text-cyan-400 ">
          Hi there, I'm{" "}
        </h1>
        <h2 className="text-7xl font-extrabold pb-4">Ishan Bhardwaj</h2>
        <h3 className="text-4xl font-extrabold ">
          A Passionate <span className=" text-[#0f0]" ref={el}></span>
        </h3>
      </div>
      <div className="flex-[0.3]">
        <img src="/avatar.png" />
      </div>
    </div>
  );
}

export default Landing;
