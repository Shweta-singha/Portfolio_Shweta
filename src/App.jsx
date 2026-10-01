import { useEffect, useState } from "react";
import "./index.css";

const projects = [
  {
    title: "NexusHR – AI-Enabled Enterprise HR Platform",
    desc: "Full-stack HR platform covering employee and department management, real-time attendance, leave and payroll. Includes a RAG-based HR policy chatbot (PgVector + Gemini API) and an ML attrition-prediction model that surfaces at-risk employees.",
    metrics: [
      "JWT + Argon2id, refresh-token rotation",
      "Role-based access & audit trail",
      "Real-time attendance via SSE",
    ],
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "React", "TypeScript", "RAG", "Docker"],
    live: "https://nexus-hr-gilt.vercel.app/",
    code: "https://github.com/Shweta-singha/NexusHR",
  },
  {
    title: "Placement Record Management System (PRMS)",
    desc: "Production placement portal for IIIT Guwahati with four role-based portals. Features a RAG-based resume–JD skills-gap analyzer built as an independent FastAPI microservice, Google Sheets ingestion and a real-time analytics dashboard.",
    metrics: [
      "4 portals with RBAC & JWT auth",
      "LLM-powered skills-gap recommendations",
      "Deployed in production with Docker",
    ],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "RAG", "React", "MySQL", "Gemini API"],
    live: "https://www.prmsportal.com/login",
    code: "https://github.com/Shweta-singha/PlacementManagementSystem",
  },
  {
    title: "AI-Powered EHS Risk Intelligence Platform",
    desc: "Construction-safety risk platform built on 4,470 real OSHA accident records. Classifies incident severity, explains predictions with SHAP, and uses a RAG agent to draft compliance recommendations for safety officers.",
    metrics: [
      "NLP + Random Forest / Logistic Regression",
      "SHAP explainability",
      "Natural-language Streamlit dashboard",
    ],
    tech: ["Python", "scikit-learn", "LangGraph", "RAG", "Gemini API", "Streamlit"],
    live: "https://ai-powered-ehs-risk-intelligence-platform-uj3sgtyzc6muhnwyrkoz.streamlit.app/",
    code: "https://github.com/Shweta-singha/AI-Powered-EHS-Risk-Intelligence-Platform",
  },
  {
    title: "CampusX IIITG – One Platform for Everything IIITG",
    desc: "Campus platform consolidating ride-sharing, a marketplace, lost & found, event management and an exam calendar for students, faculty and admins. Microservices on Spring Cloud Gateway, with a Python RAG chatbot over exams, events and PYQs.",
    metrics: [
      "Centralized JWT, rotating refresh tokens, RBAC",
      "Atomic concurrency protection for bookings",
      "240+ automated tests, Docker Compose",
    ],
    tech: ["Java 21", "Spring Boot 3", "Spring Cloud Gateway", "MongoDB", "React", "Python", "RAG", "Docker"],
  },
];

const skills = [
  ["Languages", ["Java", "Python", "SQL", "JavaScript (ES6+)"]],
  ["AI / ML", ["Machine Learning", "NLP", "Generative AI", "RAG", "LLM Integration (Gemini API)", "scikit-learn"]],
  ["Backend", ["Spring Boot", "REST APIs", "FastAPI", "JWT Authentication", "Microservices"]],
  ["Frontend", ["React", "TypeScript", "Vite", "Responsive Design"]],
  ["Database", ["MySQL", "PostgreSQL", "MongoDB", "Redis"]],
  ["Tools & Deployment", ["Docker", "Vercel", "Git/GitHub", "Postman", "Swagger/OpenAPI"]],
];

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
  <p className="role">Full Stack &amp; AI Developer</p>
</div>
</div>

{!scrolled && (
  <div className="nav-center">
    <p className="summary">
      Full Stack &amp; AI Developer building scalable web applications with Java, Spring Boot and React, plus RAG and LLM-powered features. Experienced in secure REST APIs, JWT authentication, microservices and production deployment.
    </p>
  </div>
)}

        <div className="nav-right">
          <a href="mailto:iamshweta.singha@gmail.com">Email</a>
          <a href="https://github.com/Shweta-singha" target="_blank" rel="noreferrer">
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
                M.Tech Computer Science student at IIIT Guwahati with hands-on experience building full-stack, AI-enabled applications. Strong interest in backend engineering with Java and Spring Boot, microservices, and applying RAG and machine learning to real-world problems.
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
                CGPA: 7.95
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
                <strong>Zidio Development Pvt. Ltd.</strong> (May 2026 – Jul 2026)
                <br />
                Java Full Stack Development Intern (Remote)
                <br />
                Built NexusHR with Java, Spring Boot, React and PostgreSQL —
                REST APIs, authentication workflows, testing and architecture
                documentation.
              </p>
              <p>
                <strong>Hireginie Talent Cloud Pvt Ltd</strong> (Dec 2025 – Jan 2026)
                <br />
                Founder’s Office Intern – Strategy &amp; Growth (Remote)
                <br />
                Business analysis, market research and Excel dashboards for
                stakeholder reporting.
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
                {projects.map((p) => (
                  <div className="project-card" key={p.title}>
                    <h3>{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>

                    <div className="project-metrics">
                      {p.metrics.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>

                    <div className="project-tech">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="link-live"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {p.code && (
                        <a href={p.code} target="_blank" rel="noreferrer">
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
<div id="skills" className="resume-section">
  <h2>Technical Skills</h2>

  <div className="skills-grid">
                {skills.map(([title, tags]) => (
                  <div className="skill-card" key={title}>
                    <h4>{title}</h4>
                    <div className="skill-tags">
                      {tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}

export default App;
