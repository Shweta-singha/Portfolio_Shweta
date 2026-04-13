import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  /* Navbar collapse */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    const sections = document.querySelectorAll(".resume-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar--small" : ""}`}>
        <div className="nav-left">
          <img
            src="/Shweta_pic.png"
            alt="M Shweta Singha"
            className="profile-img"
          />
<div>
  <h2 className="name">M Shweta Singha</h2>
  <p className="role">MERN Full Stack Developer</p>
</div>
</div>

{!scrolled && (
  <div className="nav-center">
    <p className="summary">
      MERN Full Stack Developer skilled in building scalable web applications,
      designing REST APIs, and developing responsive user interfaces with React.
      Experienced in authentication systems, real-time features, and clean,
      maintainable code.
    </p>
  </div>
)}

        <div className="nav-right">
          <a href="mailto:iamshweta.singha@gmail.com">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shweta-singha-01b326154/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* RESUME */}
      <main className="resume-wrapper">
        <div className="resume-card">
          {/* SIDEBAR */}
          <aside className="resume-sidebar">
            <a
              href="/Shweta_Singha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-item"
            >
              resume
            </a>

            {[
              "about",
              "education",
              "experience",
              "projects",
              "skills",
              "responsibility",
            ].map((item) => (
              <div
                key={item}
                className={`sidebar-item ${
                  active === item ? "active" : ""
                }`}
                onClick={() => scrollTo(item)}
              >
                {item}
              </div>
            ))}
          </aside>

          {/* CONTENT */}
          <section className="resume-content">
            {/* ABOUT */}
            <div id="about" className="resume-section">
              <h2>About Me</h2>
              <p>
                M.Tech Computer Science student at IIIT Guwahati with hands-on
                experience in full-stack web development. Strong interest in
                frontend engineering, UI/UX design, and building scalable,
                performance-optimized web applications.
              </p>
            </div>

            {/* EDUCATION */}
            <div id="education" className="resume-section">
              <h2>Education</h2>

              <p>
                <strong>IIIT Guwahati</strong>
                <br />
                M.Tech – Computer Science & Engineering (2025 – 2027)
                <br />
                CGPA: 7.82
              </p>

              <p>
                <strong>Sathyabama University, Chennai</strong>
                <br />
                B.Tech – Computer Science & Engineering (2017 – 2021)
                <br />
                CGPA: 8.76
              </p>
            </div>

            {/* EXPERIENCE */}
            <div id="experience" className="resume-section">
              <h2>Experience</h2>
              <p>
                <strong>Hireginie Talent Cloud Pvt Ltd</strong> (Dec 2025 – Present)
                <br />
                Founder’s Office Intern (Remote)
              </p>
            </div>

            {/* RESPONSIBILITY */}
            <div id="responsibility" className="resume-section">
              <h2>Positions of Responsibility</h2>

              <p>
                <strong>Placement Coordinator</strong>
                <br />
                Placement Working Committee, IIIT Guwahati (2026 – Present)
              </p>

              <p>
                <strong>Vice President</strong>
                <br />
                Microsoft Campus Club, Sathyabama University (2019 – 2021)
              </p>
            </div>

            {/* PROJECTS */} 
<div id="projects" className="resume-section">
  <h2>Projects</h2>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <h3>Digital Banking Transaction Platform</h3>
      <p className="project-desc">
        Built a secure full-stack banking application supporting fund transfers, account management, and transaction tracking with robust authentication.
      </p>

      <div className="project-metrics">
        <span>JWT Authentication</span>
        <span>Role-Based Access</span>
        <span>Secure Transactions</span>
      </div>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>JWT</span>
      </div>

      <div className="project-links">
        <a href="#" target="_blank" rel="noreferrer">Live</a>
        <a href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3>Public Grievance Redressal Portal</h3>
      <p className="project-desc">
        Developed a complaint management system enabling users to register, track, and manage grievances with role-based admin workflows.
      </p>

      <div className="project-metrics">
        <span>RBAC System</span>
        <span>REST APIs</span>
        <span>Status Tracking</span>
      </div>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>JWT</span>
      </div>

      <div className="project-links">
        <a href="#" target="_blank" rel="noreferrer">Live</a>
        <a href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <h3>Sarthi – Campus Community Platform</h3>
      <p className="project-desc">
        Developed a full-stack campus platform enabling real-time chat, ride-sharing, and marketplace interactions with scalable architecture.
      </p>

      <div className="project-metrics">
        <span>Real-time Chat</span>
        <span>Google OAuth</span>
        <span>SPA Architecture</span>
      </div>

      <div className="project-tech">
        <span>React</span>
        <span>Vite</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>Socket.IO</span>
      </div>

      <div className="project-links">
        <a href="#" target="_blank" rel="noreferrer">Live</a>
        <a href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>

    {/* Project 4 */}
    <div className="project-card">
      <h3>Placement Record Management System</h3>
      <p className="project-desc">
        Designed and implemented a backend system to manage student placements, company records, and recruitment workflows with efficient data handling.
      </p>

      <div className="project-metrics">
        <span>REST API Design</span>
        <span>Database Modeling</span>
        <span>CRUD Operations</span>
      </div>

      <div className="project-tech">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>MySQL</span>
      </div>

      <div className="project-links">
        <a href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>

  </div>
</div>


{/* SKILLS */}
<div id="skills" className="resume-section">
  <h2>Technical Skills</h2>

  <div className="skills-grid">

    <div className="skill-card">
      <h4>Languages</h4>
      <div className="skill-tags">
        <span>JavaScript (ES6+)</span>
        <span>Java</span>
        <span>C</span>
      </div>
    </div>

    <div className="skill-card">
      <h4>Frontend</h4>
      <div className="skill-tags">
        <span>React.js</span>
        <span>Vite</span>
        <span>React Router</span>
        <span>Context API</span>
        <span>Responsive Design</span>
      </div>
    </div>

    <div className="skill-card">
      <h4>Backend</h4>
      <div className="skill-tags">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>REST APIs</span>
        <span>JWT Authentication</span>
      </div>
    </div>

    <div className="skill-card">
      <h4>Database</h4>
      <div className="skill-tags">
        <span>MongoDB</span>
        <span>Mongoose</span>
        <span>MySQL</span>
      </div>
    </div>

    <div className="skill-card">
      <h4>Tools</h4>
      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Docker</span>
        <span>Postman</span>
      </div>
    </div>

    <div className="skill-card">
      <h4>Core Concepts</h4>
      <div className="skill-tags">
        <span>OOP</span>
        <span>API Design</span>
        <span>Authentication</span>
        <span>Async Programming</span>
      </div>
    </div>

  </div>
</div>

            
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
