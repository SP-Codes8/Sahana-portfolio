"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Database, BarChart3, BrainCircuit, MapPin, Sparkles, Download,
  ExternalLink, GraduationCap, BriefcaseBusiness, Terminal, MousePointer2
} from "lucide-react";

const skills = [
  { title: "Programming", icon: Code2, items: ["Python", "Java", "SQL", "JavaScript"] },
  { title: "Frontend", icon: Code2, items: ["React.js", "Angular", "HTML5", "CSS3"] },
  { title: "Backend & Databases", icon: Database, items: ["Node.js", "FastAPI", "MySQL", "MongoDB", "SQLite"] },
  { title: "Data & BI", icon: BarChart3, items: ["Power BI", "Excel", "PySpark", "SparkSQL", "Hadoop"] },
  { title: "AI & Machine Learning", icon: BrainCircuit, items: ["Machine Learning", "NLP", "Computer Vision", "Generative AI"] },
  { title: "Tools", icon: BriefcaseBusiness, items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter"] }
];

const projects = [
  {
    number: "01", name: "SmartStudy Portal", type: "AI-POWERED LEARNING PLATFORM",
    description: "A learning platform concept that transforms textbook content into study material through OCR, summarization, question generation and personalized study support.",
    stack: ["React", "Python", "FastAPI", "SQLite", "OCR", "Generative AI"],
    github: "https://github.com/SP-Codes8"
  },
  {
    number: "02", name: "MetroPath Finder", type: "ROUTE DISCOVERY WEB APPLICATION",
    description: "A web application concept for searching metro routes and managing route information such as source, destination, distance and cost.",
    stack: ["Angular", "Node.js", "MySQL", "JavaScript"],
    github: "https://github.com/SP-Codes8"
  }
];

const education = [
  { course: "Master of Computer Applications (MCA)", institute: "PES University, Bengaluru", detail: "CGPA: 8.27" },
  { course: "Bachelor of Computer Applications (BCA)", institute: "Global Innovative College, Hubli", detail: "CGPA: 8.88" }
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Heading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="grid-bg" />
      <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>SP<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Education", "Contact"].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="mailto:YOUR_EMAIL@example.com">Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>
            <span className="pulse" /> OPEN TO OPPORTUNITIES
          </motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>HELLO, I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45, duration: .8 }}>
            Sahana <span>Patil.</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .62, duration: .8 }}>
            Building with code.<br/><em>Thinking with data.</em>
          </motion.h2>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85 }}>
            MCA graduate passionate about software development, full-stack applications and data analytics. I enjoy turning ideas into useful, well-crafted solutions.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Get in touch</a>
          </motion.div>
          <div className="hero-socials">
            <a href="https://github.com/SP-Codes8" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
            <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email"><Mail/></a>
            <span className="social-line"/><span className="social-label">BENGALURU, INDIA</span>
          </div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .88, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .45, duration: 1, ease: "easeOut" }}>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <motion.div className="photo-frame" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="photo-topline"><span>PROFILE / 001</span><span>2026</span></div>
            <div className="photo-placeholder">
               <img src="/profile.jpeg" alt="Sahana Patil" className="profile-photo"/>
            </div>
            <div className="photo-bottomline"><span>SAHANA PATIL</span><span>DEVELOPER · ANALYST</span></div>
          </motion.div>
          <motion.div className="floating-note note-top" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.4, repeat: Infinity }}><Sparkles size={15}/> Curious by nature</motion.div>
          <motion.div className="floating-note note-bottom" animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}><Terminal size={15}/> Always learning</motion.div>
          <div className="hero-index">01 — 05</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        <div className="hero-side-label">PORTFOLIO · 2026</div>
      </section>

      <section className="section-wrap section-block" id="about">
        <Reveal><Heading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity meets <span>creation.</span></>}/></Reveal>
        <div className="about-grid">
          <Reveal><p className="large-copy">I’m an MCA graduate who likes understanding how things work — and then building something useful with that knowledge.</p></Reveal>
          <Reveal delay={.12}>
            <div className="about-detail">
              <p>My interests span software engineering and data analytics. I enjoy developing web applications, working with databases, exploring data and learning how AI can make products more helpful.</p>
              <p>I’m currently strengthening my problem-solving, SQL, Python, frontend and business intelligence skills through hands-on practice.</p>
              <div className="about-facts">
                <div><span>01</span><strong>Software Development</strong></div>
                <div><span>02</span><strong>Data & Business Intelligence</strong></div>
                <div><span>03</span><strong>Continuous Learning</strong></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <Reveal><Heading eyebrow="WHAT I WORK WITH" title={<>My technical <span>toolkit.</span></>} text="Technologies and tools I have studied or worked with — growing stronger through practical projects." /></Reveal>
        <div className="skills-grid">
          {skills.map(({title, icon: Icon, items}, index) =>
            <Reveal key={title} delay={index * .07}>
              <motion.article className="skill-card" whileHover={{ y: -8, scale: 1.015, borderColor: "rgba(167,139,250,.75)" }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                <div className="skill-card-top"><span className="skill-number">0{index+1}</span><Icon size={22}/></div>
                <h3>{title}</h3>
                <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                <div className="skill-glow"/>
              </motion.article>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <Reveal><Heading eyebrow="SELECTED WORK" title={<>Projects in <span>focus.</span></>} text="A selection of work that reflects my interest in building useful applications and exploring technology." /></Reveal>
        <div className="projects-list">
          {projects.map((project, index) =>
            <Reveal key={project.number} delay={index * .12}>
              <motion.article className="project-card" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                  <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub profile <ExternalLink size={13}/></a></div>
                </div>
                <div className="project-mark"><Code2 size={48} strokeWidth={1}/></div>
                <div className="project-sheen"/>
              </motion.article>
            </Reveal>
          )}
        </div>
        <p className="small-note">Replace profile-level GitHub links with the exact project repositories before sharing with recruiters.</p>
      </section>

      <section className="section-wrap section-block" id="education">
        <Reveal><Heading eyebrow="THE FOUNDATION" title={<>Education & <span>experience.</span></>}/></Reveal>
        <div className="timeline">
          {education.map((item, index) =>
            <Reveal key={item.course} delay={index * .12}>
              <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-year">0{index+1}</div><div><h3>{item.course}</h3><p>{item.institute}</p><span>{item.detail}</span></div></div>
            </Reveal>
          )}
        </div>
        <Reveal>
          <article className="internship-card">
            <div className="internship-heading">
              <div>
                <span className="project-type">INTERNSHIP EXPERIENCE</span>
                <h3>Full Stack Intern</h3>
                <p className="internship-company">Toyota Kirloskar Motor Pvt. Ltd.</p>
              </div>
              <span className="internship-duration">FEB 2026 – JUN 2026<br/>4 MONTHS</span>
            </div>
            <p className="internship-intro">Collaborated with business and data analytics teams to build automation and internal business applications.</p>
            <ul className="internship-points">
              <li>Designed and implemented a scheduled email automation system with three daily triggers for reliable report delivery.</li>
              <li>Built dynamic HTML email templates capable of handling large datasets across email clients.</li>
              <li>Implemented calendar-based tracking and history logs for report auditing.</li>
              <li>Integrated Single Sign-On (SSO) authentication to support secure user access.</li>
              <li>Developed a web-based asset management system to track allocation, usage and lifecycle.</li>
              <li>Designed REST APIs and integrated frontend modules for real-time data updates.</li>
              <li>Developed an SDLC tracking system using Microsoft Power Apps for real-time project progress monitoring.</li>
            </ul>
            <div className="internship-tags">
              {["Email Automation", "HTML", "SSO", "REST APIs", "Microsoft Power Apps", "Asset Management", "SDLC Tracking"].map(tag => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </article>
        </Reveal>
        
<Reveal>
  <article className="internship-card">
    <div className="internship-heading">
      <div>
        <span className="project-type">
          INTERNSHIP EXPERIENCE
        </span>
        <h3>Web Development Intern</h3>
        <p className="internship-company">Apponix</p>
      </div>
      <span className="internship-duration">
        APR 2024 – JUN 2024<br />
        3 MONTHS
      </span>
    </div>

    <p className="internship-intro">
      Worked with a four-member development team to build
      responsive web applications and improve application
      performance and development practices.
    </p>

    <ul className="internship-points">
      <li>Built responsive web applications using React.js, HTML, CSS and SQL.</li>
      <li>Collaborated in a four-member team, contributing to a 20% improvement in development efficiency.</li>
      <li>Integrated REST APIs and optimized backend queries, improving performance by 25%.</li>
      <li>Improved documentation and testing processes, reducing bugs by 15%.</li>
    </ul>

    <div className="internship-tags">
      {["React.js", "HTML", "CSS", "SQL", "REST APIs", "Backend Optimization", "Testing"].map(tag => (
        <span className="tag" key={tag}>{tag}</span>
      ))}
    </div>
  </article>
</Reveal>

      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <Reveal><Heading eyebrow="HAVE A ROLE OR IDEA IN MIND?" title={<>Let's make something <span>meaningful.</span></>} text="I’m open to opportunities in software development, full-stack engineering and data analytics."/></Reveal>
          <Reveal delay={.1}><a className="contact-email" href="mailto:scp08062002@gmail.com">scp08062002@gmail.com <ArrowUpRight/></a></Reveal>
          <div className="contact-bottom">
            <span><MapPin size={15}/> Bengaluru, India</span>
            <div className="contact-socials">
              <a href="https://github.com/SP-Codes8" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">SP<span>.</span></a>
        <span>Designed & built with curiosity.</span>
        <span>© {new Date().getFullYear()} Sahana Patil</span>
      </footer>
    </main>
  );
}



