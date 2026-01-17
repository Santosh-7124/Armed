import React from "react";
import Image from "../assets/Security/Image.png";

function Security() {
  return (
    <section className="security">
      <header>
        <h2>
          Security <br className="desktop" /> Systems
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac consectetur sit diam massa.
          Arcu duis posuere tellus iaculis tortor. Lorem ipsum dolor sit amet
          consectetur. Ac consectetur sit diam massa.
        </p>
      </header>
      <div className="security-container">
        <div className="security-img">
          <img src={Image} alt="Security Image" />
        </div>
        <div className="security-text">
          <p>CCTV Security Surveillance Systems</p>
          <hr />
          <p>Access Card / Bio Metric for attendance system</p>
          <hr />
          <p>Face detection with thermal scanner for COVID-19</p>
          <hr />
          <p>
            Flab barrier, Full & Half turnstile security system with proximity
            access cards (RFID)
          </p>
          <hr />
          <p>
            IOT system integration production tracking system with 4 core
            technology for manual machines with cloud-based report
          </p>
          <hr />
          <p>
            Software management for visitor and payroll systems integration with
            face detection
          </p>
        </div>
      </div>
    </section>
  );
}

export default Security;
