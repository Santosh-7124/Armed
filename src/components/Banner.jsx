import React from "react";
import Logo from "../assets/Banner/Logo.png";
import Anandan from "../assets/Banner/Anandan.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <header>
          <img src={Logo} alt="Armed Fire Service"/>
          <p>
            Managing Director at <strong>Armed Fire Service, India</strong>
          </p>
        </header>
        <div className="banner-content">
          <h1>Anandan. N</h1>
          <p>
            Empowering businesses with reliable fire safety solutions that
            protect life and property.
          </p>
        </div>
        <a href="#" className="primary-button">
          <p>Let’s Talk</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1202_4662"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1202_4662)">
              <path
                d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                fill="#E41A24"
              />
            </g>
          </svg>
        </a>
      </div>
      <div className="banner-right">
        <img src={Anandan} alt="Anandan. N" />
      </div>
    </section>
  );
}

export default Banner;
