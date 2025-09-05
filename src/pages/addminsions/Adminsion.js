import React from 'react'
import './Adminsion.css'
const Adminsion = () => {
  return (
    <section class="admission">
  <div class="admission__container">
    {/* <!-- Heading --> */}
    <h2 class="admission__title">Admissions</h2>
    <p class="admission__intro">
      Admission forms and prospectus available at the office. Documents required typically include birth certificate, previous school TC, 2 passport photos, and ID proofs. For higher secondary, subject choice depends on seats and lab availability.
    </p>

    {/* <!-- How to Apply --> */}
    <div class="admission__steps">
      <h3>How to Apply</h3>
      <ul>
        <li><span class="step-number">1</span> Visit the school office or contact us via phone/email.</li>
        <li><span class="step-number">2</span> Collect & submit the filled application form with documents.</li>
        <li><span class="step-number">3</span> Pay admission & tuition fees (if applicable).</li>
      </ul>
    </div>

    {/* <!-- Contact Info / Office Hours --> */}
    <div class="admission__contact">
      <h3> Office Hours</h3>
      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
      <p>Email: <a href="mailto:info@hvpatilvidyalaya.edu">info@hvpatilvidyalaya.edu</a></p>
      {/* {/* <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p> * */}
    </div>
  </div>
</section>

)
}

export default Adminsion