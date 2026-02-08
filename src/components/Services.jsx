import React, { useEffect, useRef, useState } from "react";
import Arrow from "../assets/Services/Arrow.svg";
import Services1 from "../assets/Services/Services 1.png";
import Services2 from "../assets/Services/Services 2.png";
import Services3 from "../assets/Services/Services 3.png";
import Services4 from "../assets/Services/Services 4.png";

function Services() {
  const servicesContainerRef = useRef(null);
  const servicesSliderRef = useRef(null);
  const progressIndicatorRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const servicesData = [
    {
      img: Services1,
      alt: "Services 1",
      text: "Fire Extinguishers Supply, Servicing & Refilling.",
    },
    {
      img: Services2,
      alt: "Services 2",
      text: "Fire Hydrant System Installation & Services.",
    },
    {
      img: Services3,
      alt: "Services 3",
      text: "Fire Sprinkler System Installation & Services.",
    },
    {
      img: Services4,
      alt: "Services 4",
      text: "Smoke Detection & Fire Alarm System (Conventional & Addressable).",
    },
  ];

  const config = {
    visibleSets: 3,
    totalSets: servicesData.length,
    gap: 12,
  };

  useEffect(() => {
    const containerWidth = servicesContainerRef.current.offsetWidth;

    progressIndicatorRef.current.style.width = `${
      (containerWidth / servicesData.length) * config.visibleSets
    }px`;
  }, []);

  const slideServices = (direction) => {
    const containerWidth = servicesContainerRef.current.offsetWidth;
    const singleSetWidth = containerWidth / 3 - 8;
    console.log(singleSetWidth);

    const maxIndex = config.totalSets - config.visibleSets;

    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0 || newIndex > maxIndex) return;

    setCurrentIndex(newIndex);

    const translateX = newIndex * (singleSetWidth + config.gap);
    const indicatorStep = containerWidth / servicesData.length;
    const indicatorTranslateX = newIndex * indicatorStep;

    servicesSliderRef.current.style.transform = `translateX(-${translateX}px)`;
    progressIndicatorRef.current.style.transform = `translateX(${indicatorTranslateX}px)`;
  };

  const maxIndex = config.totalSets - config.visibleSets;

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === maxIndex;

  return (
    <section className="services">
      <h2>
        We provide followingWe Provide Following <span> Range of Training, Fire audit and Certifications</span>
      </h2>

      <div className="services-buttons">
        <button
          className="arrow-button"
          onClick={() => slideServices("prev")}
          style={{
            opacity: isPrevDisabled ? 0.5 : 1,
            cursor: isPrevDisabled ? "default" : "pointer",
          }}
        >
          <img src={Arrow} />
        </button>

        <button
          className="arrow-button"
          onClick={() => slideServices("next")}
          style={{
            opacity: isNextDisabled ? 0.5 : 1,
            cursor: isNextDisabled ? "default" : "pointer",
          }}
        >
          <img src={Arrow} />
        </button>
      </div>

      <div className="services-container" ref={servicesContainerRef}>
        <div className="services-slider" ref={servicesSliderRef}>
          {servicesData.map((service, index) => (
            <article className="services-set" key={index}>
              <div className="services-set-img">
                <img src={service.img} alt={service.alt} />
              </div>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="services-progress-bar">
          <div
            className="services-progress-bar-indicator"
            ref={progressIndicatorRef}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Services;
