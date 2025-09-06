import React, { useEffect, useRef } from "react";
import "./AboutPage.css";
import { FaGraduationCap, FaUsers, FaBook, FaLandmark } from "react-icons/fa";

const AboutPage = () => {
  const statsRef = useRef([]);

  // Animate stats numbers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const finalNumber = parseInt(el.getAttribute("data-target"));
            let count = 0;
            const step = Math.ceil(finalNumber / 100);
            const interval = setInterval(() => {
              count += step;
              if (count >= finalNumber) {
                count = finalNumber;
                clearInterval(interval);
              }
              el.innerText = count + (el.getAttribute("data-plus") || "");
            }, 20);
          }
        });
      },
      { threshold: 0.5 }
    );
    statsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <div className="aboutPage">

      {/* Hero Section */}
      <section className="aboutPage__hero">
        <div className="hero-shape shape1"></div>
        <div className="hero-shape shape2"></div>
        <div className="hero-shape shape3"></div>
        <div className="aboutPage__heroOverlay">
          <h1 className="aboutPage__heroTitle">Welcome to H.V. Patil Vidyalaya & Jr. College</h1>
          <p className="aboutPage__heroSubtitle">Shaping Futures · Inspiring Innovation · Building Leaders</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="aboutPage__visionMission">
        <div className="aboutPage__vmCard">
          <FaLandmark className="aboutPage__vmIcon" />
          <h2 className="aboutPage__vmTitle">Our Vision</h2>
          <p className="aboutPage__vmText">
            Empower students with knowledge, ethics, and skills to excel in life.
          </p>
        </div>
        <div className="aboutPage__vmCard">
          <FaBook className="aboutPage__vmIcon" />
          <h2 className="aboutPage__vmTitle">Our Mission</h2>
          <p className="aboutPage__vmText">
            Provide quality education, modern facilities, and holistic development.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="aboutPage__history">
        <h2 className="aboutPage__sectionTitle">Our History</h2>
        <div className="aboutPage__timeline">
          <div className="aboutPage__timelineItem">
            <span className="aboutPage__timelineYear">1995</span>
            <p>Founded as a primary school focusing on Marathi medium education.</p>
          </div>
          <div className="aboutPage__timelineItem">
            <span className="aboutPage__timelineYear">2005</span>
            <p>Expanded to Semi-English classes and introduced modern labs.</p>
          </div>
          <div className="aboutPage__timelineItem">
            <span className="aboutPage__timelineYear">2015</span>
            <p>Established Junior College (FYJC & SYJC) with Arts & Science streams.</p>
          </div>
          <div className="aboutPage__timelineItem">
            <span className="aboutPage__timelineYear">2023</span>
            <p>Recognized for excellence in academics and STEAM initiatives.</p>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="aboutPage__faculty">
        <h2 className="aboutPage__sectionTitle">Our Faculty</h2>
        <div className="aboutPage__facultyCards">
          <div className="aboutPage__facultyCard">
            <img className="aboutPage__facultyImg" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Faculty" />
            <h3>Mr. Kaushal Patil</h3>
            <p>Principal – Leading academic excellence and innovation.</p>
          </div>
          <div className="aboutPage__facultyCard">
            <img className="aboutPage__facultyImg" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Faculty" />
            <h3>Mrs. Meera Joshi</h3>
            <p>Head of Science Department – STEAM & Research Focused.</p>
          </div>
          <div className="aboutPage__facultyCard">
            <img className="aboutPage__facultyImg" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Faculty" />
            <h3>Mr. Ramesh Kulkarni</h3>
            <p>Head of Arts Department – Creative & Holistic Development.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="aboutPage__stats">
        <div className="aboutPage__statsGrid">
          <div className="aboutPage__statCard">
            <FaGraduationCap className="aboutPage__statIcon" />
            <h2 ref={el => statsRef.current[0] = el} data-target="2500" data-plus="+">0</h2>
            <p>Students Enrolled</p>
          </div>
          <div className="aboutPage__statCard">
            <FaUsers className="aboutPage__statIcon" />
            <h2 ref={el => statsRef.current[1] = el} data-target="150" data-plus="+">0</h2>
            <p>Faculty Members</p>
          </div>
          <div className="aboutPage__statCard">
            <FaBook className="aboutPage__statIcon" />
            <h2 ref={el => statsRef.current[2] = el} data-target="30" data-plus="+">0</h2>
            <p>Laboratories & Libraries</p>
          </div>
          <div className="aboutPage__statCard">
            <FaLandmark className="aboutPage__statIcon" />
            <h2 ref={el => statsRef.current[3] = el} data-target="28">0</h2>
            <p>Years of Excellence</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
