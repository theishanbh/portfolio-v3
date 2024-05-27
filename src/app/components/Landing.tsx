"use client";

import { init } from "ityped";
import { stringify } from "querystring";
import { useEffect, useRef } from "react";

function Landing() {
  const typed = useRef(null);
  useEffect(() => {
    init(typed.current!, {
      showCursor: true,
      strings: ["Developer", "Freelancer", "Learner"],
    });
  }, []);
  return (
    <div className="landing">
      <div className="left">
        <h1>Hi there, Im </h1>
        <h2>Ishan Bhardwaj</h2>
        <h3>
          A Passionate <span ref={typed}></span>
        </h3>
      </div>
      <div className="right">
        <img
          src="../../Assets/img/avataaars.png"
          alt="hello"
          className="portfolioImage"
        />
      </div>
    </div>
  );
}

export default Landing;
