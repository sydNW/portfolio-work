
import React from "react";
import "./App.css";

const skills = [
  {
    title: "Programming",
    items: ["C++", "Java", "JavaScript", "Python", "Assembly"],
  },
  {
    title: "Web & App Development",
    items: ["React", "HTML", "CSS", "API Integration"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning Concepts",
      "Data Preparation",
      "Model Evaluation",
    ],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "Linux"],
  },
];

const projects = [
  {
    title: "Class Pulse",
    description:
      "An academic performance prediction system developed as a team project. My main contribution was frontend development and building parts of the user interface.",
    technologies: ["Frontend Development", "React", "JavaScript"],
    link: "https://github.com/odrumz/CLASS-PERFORMANCE-PREDICTION-SYSTEM.git",
  },
  {
    title: "Computer Graphics Algorithms",
    description:
      "A C++ and OpenGL project demonstrating computer graphics algorithms through a menu-driven program, including line drawing, circle and ellipse drawing, and line clipping.",
    technologies: ["C++", "OpenGL", "Computer Graphics"],
    link: "https://github.com/sydNW/Comp-graphics-OpenGL-work.git",
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio website presenting my background, skills, education, interests, and development projects.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/sydNW/portfolio-work.git",
  },
];

const education = [
  {
    institution: "Strathmore University",
    qualification: "Bachelor's degree in Computer Science",
    dates: "2024 – Present",
  },
  {
    institution: "St. Francis Mang'u High School",
    qualification: "High School",
    dates: "2017 – 2021",
  },
  {
    institution: "Gilgil Hills Academy",
    qualification: "Primary Education",
    dates: "2014 – 2016",
  },
];

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills &amp; Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <h1>
              Hi, I'm <span>Sydney.</span>
            </h1>
            <p className="hero-description">
              I'm a Computer Science student at Strathmore University. I like
              writing code, building apps, and understanding how things work
              underneath.
            </p>
            <a className="primary-link" href="#projects">
              Explore my projects <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading>About Me</SectionHeading>
          <div className="about-content">
            <p>
              I'm a Computer Science student at Strathmore University. I enjoy
              writing code, building applications, and learning how technology
              works. My interests are Software Development and Artificial
              Intelligence, and I'm looking for opportunities to grow my
              practical skills through real projects.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading>Skills &amp; Technologies</SectionHeading>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span className="skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK">
            Projects
          </SectionHeading>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span className="technology" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading>Education</SectionHeading>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.qualification}</p>
                </div>
                <span className="education-dates">{item.dates}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contacts-section" id="contacts">
          <SectionHeading>Contacts</SectionHeading>

          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span>sydneywairimu@gmail.com</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span>+254 717 224071</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/sydNW"
                target="_blank"
                rel="noreferrer"
              >
                github.com/sydNW
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
