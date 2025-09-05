import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css"; // we'll style it in a separate CSS file

const slides = [
  {
    src: "https://i.ytimg.com/vi/BdCL3LnPQgU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwe9nwm9aMD3QVU9_0fOTm7F28zw",
    alt: "Students in classroom",
    caption: "Vibrant classroom learning",
  },
  {
    src: "https://i.ytimg.com/vi/c75rNa9NGXk/maxresdefault.jpg",
    alt: "School campus building",
    caption: "Safe & green campus",
  },
  {
    src: "https://content3.jdmagicbox.com/v2/comp/thane/p4/022pxx22.xx22.170928192400.l1p4/catalogue/h-v-patil-vidyalaya-chinchghar-thane-schools-fDrbOHHo5h.jpg",
    alt: "Students in science practical",
    caption: "Hands-on Science & Arts",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000; // 5s per slide

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      delay
    );

    return () => resetTimeout();
  }, [current]);

  return (
    <section className="hero">
      <div className="hero__content">
        <small>Welcome to</small>
        <h1>H.V. Patil Vidyalaya & Jr. College Chinchghar</h1>
        <p>
          Quality education for Grades <strong>5th-12th</strong>.<br />
          Marathi medium & semi-English for 5th–10th. Higher secondary FYJC (11th–12th) — Arts & Science.
        </p>
        <div className="hero__buttons">
          <a href="/apply" className="btn btn-primary">Apply</a>
          <a href="/contact" className="btn btn-secondary">Contact</a>
        </div>
      </div>

      <div className="hero__slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.src} alt={slide.alt} />
              <p className="caption">{slide.caption}</p>
            </div>
          ))}
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
