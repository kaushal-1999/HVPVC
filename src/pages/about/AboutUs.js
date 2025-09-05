import React from 'react'
import './AboutUs.css'
import PrincipalImage from '../../assets/principal.png' // ensure file exists
const AboutUs = () => {
    return (
<section id="about" className="section container">
 <div className="section-heading">
        <h3>About Us</h3>
      </div>

  <div className="about-card">
    {/* Left: Principal */}
    <div className="about-left">
      <img
        src={PrincipalImage}
        alt="Principal of H.V. Patil Vidyalaya & Jr. College"
        className="principal-photo"
      />

      <h4 className="sub-heading">Principal’s Message</h4>
      <p className="principal-name"><strong>Prof. Sandesh D. Patil</strong></p>
      <p className="principal-role">Principal</p>
      <p className="principal-quote">
        “Our goal is to nurture young minds with knowledge,
        discipline, and cultural values while preparing them
        for future challenges.”
      </p>
    </div>

    {/* Right: College Info */}
    <div className="about-right">
      <p>
        <strong>H.V. Patil Vidyalaya &amp; Jr. College, Chinchghar</strong>
        is committed to providing quality education from Grade 5 to Grade 12.
        We offer Marathi medium and semi-English for Grades 5–10,
        and Higher Secondary (11–12) in Arts and Science streams.
      </p>
      <p>
        Our institution emphasizes holistic development, where students excel
        in academics, sports, and cultural activities. With dedicated teachers
        and modern facilities, we ensure a nurturing environment for success.
      </p>

      <div className="mission-vision">
        <div className="mv-box">
          <h5>Our Vision</h5>
          <p>To develop responsible citizens with strong values,
              academic excellence, and leadership qualities.</p>
        </div>
        <div className="mv-box">
          <h5>Our Mission</h5>
          <p>To impart quality education through innovative teaching,
              extracurricular activities, and community service.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}

export default AboutUs