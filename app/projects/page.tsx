
import Link from "next/link";
import Image from "next/image";

const projects = [

    {
        title: "DynaTechX Skills Hub",
        category: "FULL-STACK WEB DEVELOPMENT",
        description:
            "Designed, developed, and deployed a full-stack educational management system featuring secure admin, student, and instructor portals. Built student and instructor management, attendance tracking, academic results, payment records, notifications, authentication, and database-driven PHP APIs. Deployed using Vercel and Hostinger.",
        technologies: "Next.js · React · TypeScript · PHP · MySQL",
        liveUrl: "https://dynatechxhub.com",
    },
    {
        title: "JavaScript Calculator",
        category: "FRONTEND WEB DEVELOPMENT",
        description:
            "A functional, interactive calculator developed using HTML, CSS, and vanilla JavaScript. Demonstrates practical knowledge of DOM manipulation, event handling, user interface development, and arithmetic operations.",
        technologies: "HTML · CSS · JavaScript",
    },
];

export default function ProjectsPage() {
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
                        <Link href="/#professions">what i do</Link>
                        <Link href="/#teaching">teaching</Link>
                        <Link href="/#contact">contact</Link>
                    </nav>
                </div>
            </header>

            <section className="projects-hero">
                <div className="content-container">
                    <p className="section-eyebrow">
                        SOFTWARE DEVELOPMENT PORTFOLIO
                    </p>

                    <h1>My Projects</h1>

                    <p>
                        Explore my practical experience building
                        responsive interfaces, web applications,
                        backend integrations, and database-driven
                        solutions.
                    </p>
                </div>
            </section>

            <section className="content-container section-spacing">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            className="project-card"
                            key={project.title}
                        >
                            <p className="section-eyebrow">
                                {project.category}
                            </p>

                            <h2>{project.title}</h2>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <p className="project-technologies">
                                {project.technologies}
                            </p>

                            {"liveUrl" in project && project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-link"
                                >
                                    View Live Website →
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className="content-container section-spacing">
                <p className="section-eyebrow">
                    CUSTOMER EXPERIENCE & TEAM LEADERSHIP
                </p>

                <h2 className="section-title">
                    Professional Achievements
                </h2>

                <div className="project-card">
                    <h2>
                        Greystone Partners Limited — Payorboro
                    </h2>

                    <p className="project-description">
                        As Customer Experience Team Lead at Greystone
                        Partners Limited, I managed customer support
                        operations for Payorboro, the company's digital
                        utility payment platform.
                    </p>

                    <h3 className="achievement-heading">
                        Google Customer Rating Improvement
                    </h3>

                    <div className="achievement-stats">
                        <div>
                            <strong>2.0</strong>
                            <span>Starting Rating</span>
                        </div>

                        <div>
                            <strong>4.3</strong>
                            <span>Achieved Rating</span>
                        </div>

                        <div>
                            <strong>+2.3</strong>
                            <span>Rating Increase</span>
                        </div>
                    </div>

                    <p className="project-description">
                        Led customer experience improvement efforts
                        that contributed to increasing Payorboro's
                        Google rating from 2.0 to 4.3 stars within
                        approximately one week.
                    </p>

                    <p className="project-technologies">
                        CUSTOMER SUPPORT · CRM · TEAM LEADERSHIP ·
                        COMPLAINT RESOLUTION · CUSTOMER SATISFACTION
                    </p>
                </div>


                <div className="mt-10">
                    <h3 className="achievement-heading">
                        Evidence of Customer Experience Results
                    </h3>

                    <div className="grid gap-5 md:grid-cols-3">
                        {[

                            "rating-1.jpeg",
                            "rating-2.jpeg",
                            "rating-3.jpeg",
                            "reviews-1.jpeg",
                            "reviews-3.jpeg",
                            "recognition.jpeg",

                        ].map((photo) => (
                            <div
                                key={photo}
                                className="overflow-hidden rounded-lg border border-gray-200"
                            >
                                <Image
                                    src={`/${photo}`}
                                    alt="Customer experience achievement evidence"
                                    width={500}
                                    height={850}
                                    className="h-auto w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            <section className="section-light">
                <div className="content-container">
                    <h2 className="section-title">
                        Interested in Working Together?
                    </h2>

                    <p className="section-description">
                        I am open to international remote employment,
                        software development opportunities, freelance
                        projects, and professional collaborations.
                    </p>

                    <Link href="/#contact" className="text-link">
                        Let&apos;s Connect →
                    </Link>
                </div>
            </section>

            <footer className="site-footer">
                © 2026 Mary Abioye. All rights reserved.
            </footer>
        </main>
    );
}
