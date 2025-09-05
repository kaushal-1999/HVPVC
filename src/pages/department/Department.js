import React from 'react'
import './Department.css'

const Department = () => {
  return (
    <section id="departments" className="section container">
      <div className="section-heading">
        <h3>Our Departments</h3>
        <p className="section-sub">
          We provide strong academic programs from 5th to 12th standard,
          blending knowledge, culture, and practical skills.
        </p>
      </div>

      <div className="dept-cards">
        <div className="dept-card fade-in">
          <div className="dept-icon bounce">📝</div>
          <h4>Marathi Medium (5–10)</h4>
          <p>Strong foundation in Marathi language, literature, mathematics, and sciences,
            with emphasis on cultural values and academics.</p>
        </div>

        <div className="dept-card fade-in">
          <div className="dept-icon bounce">📚</div>
          <h4>Semi-English (5–10)</h4>
          <p>Balanced program with English and Marathi instruction to prepare
            students for higher education in both streams.</p>
        </div>

        <div className="dept-card fade-in">
          <div className="dept-icon bounce">🎨</div>
          <h4>Arts (11–12)</h4>
          <p>Subjects include History, Geography, Political Science,
            Economics, Sociology, and languages for holistic development.</p>
        </div>

        <div className="dept-card fade-in">
          <div className="dept-icon bounce">🔬</div>
          <h4>Science (11–12)</h4>
          <p>Comprehensive Science curriculum with <strong>Marathi option</strong>.
            Includes Physics, Chemistry, Biology, Mathematics, and Computer Science
            along with <strong>well-equipped laboratories</strong>.</p>
        </div>
      </div>
    </section>
  )
}

export default Department
