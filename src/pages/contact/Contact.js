import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                {/* Section Title */}
                <h2 className="contact__title">Contact Us</h2>
                <p className="contact__intro">
                    Reach out to us for any queries, admissions, or support. We are here to help!
                </p>

                <div className="contact__grid">

                    {/* Row 1: Address + Map */}
                    <div className="contact__row contact__row-top">
                        {/* Contact Info */}
                        <div className="contact__info">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <p>H.V. Patil Vidyalaya, Chinchghar, Maharashtra, India</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <p>Phone: +91 12345 67890</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">✉️</span>
                                <p>Email: <a href="mailto:info@hvpatilvidyalaya.edu">info@hvpatilvidyalaya.edu</a></p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">⏰</span>
                                <p>Office Hours: Monday - Friday: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="contact__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7520.506442769168!2d73.08926644236686!3d19.53073926952738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7755200e9f377%3A0x94f53a3537f6ed22!2sH%20V%20Patil%20Vidyalaya%20Chinchghar!5e0!3m2!1sen!2sin!4v1757072939924!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="H V Patil Vidyalaya Map"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Row 2: Contact Form */}
                <div className="contact__row contact__row-bottom">
                    <div className="contact__form">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
