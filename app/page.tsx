
import Image from "next/image";
import Link from "next/link";

const professions = [
  {
    title: "Full-Stack Web Development",
    description:
      "I develop websites and web applications using HTML, CSS, JavaScript, React, Next.js, TypeScript, PHP and MySQL.",
  },
  {
    title: "WordPress Development",
    description:
      "I create and manage professional WordPress websites for businesses and individuals.",
  },
  {
    title: "Technology Education",
    description:
      "I teach frontend, backend, full-stack and WordPress development online.",
  },
  {
    title: "English & Yoruba Tutoring",
    description:
      "I provide online English and Yoruba language lessons to learners.",
  },
  {
    title: "Customer Experience",
    description:
      "I have three years of experience in customer support, CRM, complaint resolution and team leadership.",
  },
  {
    title: "Cargo Handling",
    description:
      "I hold a Diploma in Cargo Handling Operations from Earofly Institute of Technology.",
  },
];

export default function Home() {
  return (
    <main className="portfolio-site">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            MARY ABIOYE
          </Link>

          <nav className="site-nav">
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/projects">projects</Link>
            <a href="#professions">what i do</a>
            <a href="#teaching">teaching</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>


      <section className="hanselman-banner">
        <div className="banner-gallery">
          {[1, 2, 3, 4].map((item) => (
            <div className="gallery-panel" key={item}>
              <Image
                src="/img1.jpeg"
                alt={`Mary Abioye portrait ${item}`}
                fill
                priority={item === 1}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="gallery-photo"
              />
            </div>
          ))}
        </div>

        <h1 className="gallery-heading">
          Hi, I&apos;m Mary
        </h1>
      </section>


      <section className="intro-section content-container">
        <div className="intro-text">
          <p className="section-eyebrow">
            PROGRAMMER. TEACHER. LINGUIST.
            CUSTOMER EXPERIENCE PROFESSIONAL.
          </p>

          <h2>HI, I&apos;M MARY ABIOYE.</h2>

          <p>
            I&apos;m a full-stack web developer, technology
            educator, linguist and customer experience
            professional.
          </p>

          <p>
            I build websites and web applications, teach technology and languages online, and help individuals, businesses, and organizations solve problems through technology and effective communication.
          </p>

          <Link href="/about" className="text-link">
            Read more about me →
          </Link>
        </div>

        <div className="intro-photo">
          <Image
            src="/mary-profile.jpg"
            alt="Mary Abioye profile"
            width={230}
            height={230}
            className="profile-circle"
          />
        </div>
      </section>

      <section className="content-container section-spacing">
        <h2 className="section-title">Find Me Online</h2>

        <div className="online-links">
          <a href="mailto:abioyemary047@gmail.com">
            <span>✉️</span> Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/mary-abioye-56a5a0244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🔗</span> LinkedIn
          </a>

          <a
            href="https://github.com/Bolamary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💻</span> GitHub
          </a>

          <a
            href="https://wa.me/2348135509380"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>
      </section>


      <section id="professions" className="section-light">
        <div className="content-container">
          <p className="section-eyebrow">MY EXPERTISE</p>
          <h2 className="section-title">What I Do</h2>

          <div className="profession-grid">
            {professions.map((profession) => (
              <article
                key={profession.title}
                className="profession-card"
              >
                <h3>{profession.title}</h3>
                <p>{profession.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-container section-spacing">
        <p className="section-eyebrow">MY WORK</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="profession-grid">
          <article className="profession-card">
            <h3>DynaTechX Skills Hub</h3>
            <p>
              A full-stack school management website
              developed with Next.js, React, TypeScript,
              PHP and MySQL.
            </p>
            <p className="project-tech">
              NEXT.JS · REACT · PHP · MYSQL
            </p>
          </article>

          <article className="profession-card">
            <h3>JavaScript Calculator</h3>
            <p>
              A functional frontend calculator built
              using HTML, CSS and vanilla JavaScript
              to perform arithmetic operations.
            </p>
            <p className="project-tech">
              HTML · CSS · JAVASCRIPT
            </p>
          </article>
        </div>

        <Link href="/projects" className="text-link">
          View my projects →
        </Link>
      </section>

      <section id="teaching" className="section-light">
        <div className="content-container">
          <p className="section-eyebrow">EDUCATION</p>
          <h2 className="section-title">Learn With Me</h2>

          <p className="section-description">
            I provide online technology training and
            language tutoring for learners.
          </p>

          <div className="course-list">
            {[
              "Frontend Development",
              "Backend Development",
              "Full-Stack Development",
              "WordPress Development",
              "English Language",
              "Yoruba Language",
            ].map((course) => (
              <div key={course} className="course-item">
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="contact-section">
        <div className="content-container">
          <p className="section-eyebrow">
            INTERNATIONAL OPPORTUNITIES & COLLABORATIONS
          </p>

          <h2 className="section-title">Let's Connect</h2>

          <p className="section-description">
            I am open to remote opportunities with international
            companies in full-stack web development, technical
            support, customer experience, and related roles.
          </p>

          <p className="section-description">
            Whether you are a recruiter looking for a dedicated
            professional, a business seeking web development
            services, or an individual interested in online
            training, I would be happy to connect and discuss
            how I can contribute to your goals.
          </p>


          <div className="online-links">
            <a href="mailto:abioyemary047@gmail.com">
              <span>✉️</span> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mary-abioye-56a5a0244"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>🔗</span> LinkedIn
            </a>

            <a
              href="https://github.com/Bolamary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💻</span> GitHub
            </a>

            <a
              href="https://wa.me/2348135509380"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>

        </div>
      </section>


      <footer className="site-footer">
        © 2026 Mary Abioye.
        All rights reserved.
      </footer>
    </main>
  );
}
