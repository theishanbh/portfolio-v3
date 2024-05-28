"use client";

import { init } from "ityped";
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
    <div className=" flex justify-center items-center mb-40">
      <div className="flex flex-col flex-[0.7]">
        <h1 className="mt-36 text-3xl ml-12 text-cyan-400 md:mt-20 md:text-2xl">
          Hi there, I'm{" "}
        </h1>
        <h2 className="text-5xl ml-12 md:text-4xl md:ml-12 sm:text-3xl">
          Ishan Bhardwaj
        </h2>
        <h3 className="text-2xl ml-12 md:text-xl sm:text-lg">
          A Passionate <span ref={el}></span>
        </h3>
      </div>
      <div className="flex-[0.3] relative">
        <div className="block relative">
          <Image
            src="/avatar.png"
            alt="hello"
            className="pt-8 max-w-xs h-auto w-auto text-center"
            // height={200}
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
