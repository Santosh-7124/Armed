import React from "react";
import Image from "../assets/About/Image.png";

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <img src={Image} alt="Anandan. N" />
      </div>
      <div className="about-right">
        <h2>Managing Director at Armed Fire Services</h2>
        <p>
          I hold a Master’s degree in Fire Technology Engineering from Mangalore
          University, with certifications from Karnataka Fire & Emergency
          Services and RA Mundkur Fire & Emergency Services, Bengaluru. I am a
          recipient of the national Atul Bharath Gaurav Samman Award under the
          Atma Nirbhar category. <br />
          <br /> With 15+ years of experience, I have conducted 5,000+
          trainings, impacting 3 lakh+ individuals, and received multiple
          motivator awards. Beyond my profession, I am a passionate
          long-distance rider (Kashmir to Kanyakumari, Leh–Ladakh), marathon
          runner, singer with five cassette releases, motivational speaker, and
          chairman of educational institutions.
        </p>
      </div>
    </section>
  );
}

export default About;
