import React from "react";
import Image from "../assets/Hours/Image.svg";

function Hours() {
  return (
    <section className="security">
      <header>
        <h2>
          Working <br className="desktop" /> Hours
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac consectetur sit diam massa.
          Arcu duis posuere tellus iaculis tortor. Lorem ipsum dolor sit amet
          consectetur. Ac consectetur sit diam massa.
        </p>
      </header>
      <div className="hours-img">
        <img src={Image} alt="working hours" />
      </div>
    </section>
  );
}

export default Hours;
