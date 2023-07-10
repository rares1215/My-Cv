import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container text-center home-container" data-aos="fade-up">
        <div className="row align-items-start">
          <div className="col col-lg-6 col-md-12 col-sm-12 content-container">
            <h1>
              Hello World <span className="dot"></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col home-img-col">
            <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"></img>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
// #712cf9; great purple color
