import React from "react";
import "./DepartmentPage.css";

const departments = [
    { title: "Marathi Medium", desc: "5th to 10th Standard – Strong academic foundation in mother tongue", img: "https://img.icons8.com/color/96/books.png" },
    { title: "Semi-English", desc: "5th to 10th Standard – Balanced bilingual education", img: "https://img.icons8.com/color/96/classroom.png" },
    { title: "Junior College", desc: "FYJC & SYJC (11th–12th Arts & Science)", img: "https://img.icons8.com/color/96/school.png" },
];

const labs = [
    { title: "Physics Lab", desc: "Mechanics, optics, and electronics experiments", img: "https://img.icons8.com/color/96/physics.png" },
    { title: "Chemistry Lab", desc: "Fume hoods, chemical analysis, and safety-first design", img: "https://img.icons8.com/color/96/test-tube.png" },
    { title: "Biology Lab", desc: "Microscopes, anatomy models, and live specimens", img: "https://img.icons8.com/color/96/microscope.png" },
    { title: "Computer Lab", desc: "Latest PCs, high-speed internet, coding & AI", img: "https://img.icons8.com/color/96/computer.png" },
    //   { title: "Engineering Workshop", desc: "Hands-on training for mechanics & design", img: "https://img.icons8.com/color/96/engineering.png" },
    //   { title: "Robotics & AI Lab", desc: "AI, IoT, and robotics projects for STEAM", img: "https://img.icons8.com/color/96/robot-2.png" },
];

const library = [
    { title: "Reading Hall", desc: "Quiet space for focused study", img: "https://img.icons8.com/color/96/reading.png" },
    //   { title: "Digital Library", desc: "E-books, journals, and online research", img: "https://img.icons8.com/color/96/ebook.png" },
    { title: "Reference Section", desc: "Encyclopedias, research papers, and archives", img: "https://img.icons8.com/color/96/library.png" },
    { title: "Multimedia Hub", desc: "Smart screens, projectors, and e-learning", img: "https://img.icons8.com/color/96/video-projector.png" },
];

const Section = ({ title, items }) => (
    <section className="department-section">
        <h2 className="department-section-title">{title}</h2>
        <div className="department-cards">
            {items.map((item, i) => (
                <div className="department-card" key={i}>
                    <img src={item.img} alt={item.title} className="department-icon" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

const DepartmentPage = () => {
    return (
        <div className="department-page">
            {/* Hero Section */}
            <div className="department-hero">
                <div className="department-hero-overlay">
                    <h1 className="department-hero-title">🎓 Welcome to Our College</h1>
                    <p className="department-hero-subtitle">
                        Shaping Futures · Inspiring Innovation · Building Leaders
                    </p>
                </div>
            </div>

            {/* Sections */}
            <Section title="Departments" items={departments} />
            <Section title="Laboratories (STEAM)" items={labs} />
            <Section title="Library" items={library} />

            {/* Outro Section */}
            <div className="department-outro">
                <h2 className="department-outro-title">🌟 Discover · Learn · Innovate</h2>
                <p className="department-outro-text">
                    Empowering students with knowledge, innovation, and values
                    for a brighter tomorrow.
                </p>
                <button className="department-cta-btn">📩 Contact Us</button>
                <div className="department-wave"></div>
            </div>
        </div>
    );
};

export default DepartmentPage;
