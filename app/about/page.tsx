
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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

            <section className="about-banner">
                <Image
                    src="/img3.jpeg"
                    alt="Mary Abioye"
                    fill
                    priority
                    sizes="100vw"
                    className="about-banner-image"
                />
                <div className="about-banner-overlay" />
                <h1>About Me</h1>
            </section>

            <section className="content-container about-intro">

                <div className="about-text">
                    <p className="section-eyebrow">
                        FULL-STACK WEB DEVELOPER | TECH EDUCATOR |
                        CUSTOMER EXPERIENCE PROFESSIONAL
                    </p>

                    <h2>HI, I&apos;M MARY ABIOYE.</h2>

                    <p>
                        I am a full-stack web developer, technology educator,
                        and customer experience professional with a
                        multidisciplinary background in software development,
                        education, communication, and customer relationship
                        management.
                    </p>

                    <p>
                        I design and develop responsive websites and web
                        applications using HTML, CSS, JavaScript, TypeScript,
                        React, Next.js, PHP, and MySQL. My development
                        experience includes building interactive user
                        interfaces, integrating backend APIs, managing
                        databases, and implementing application functionality.
                    </p>

                    <p>
                        My technical portfolio includes DynaTechX Skills Hub,
                        a full-stack educational management platform developed
                        with Next.js, React, PHP, and MySQL, as well as a
                        functional calculator built with HTML, CSS, and
                        vanilla JavaScript.
                    </p>


                    <p>
                        I have three years of professional experience as a
                        Customer Experience Team Lead at Greystone Partners
                        Limited, where I managed customer support operations
                        for Payorboro, the company's digital utility payment
                        platform.
                    </p>

                    <p>
                        One of my notable achievements was leading customer
                        experience improvement efforts that contributed to
                        increasing Payorboro's Google customer rating from
                        2.0 to 4.3 stars within approximately one week.
                        This achievement reflected our team's commitment
                        to customer satisfaction, prompt complaint resolution,
                        and excellent service delivery.
                    </p>

                    <p>
                        My experience includes CRM management, customer
                        relationship building, team leadership, complaint
                        resolution, and maintaining high standards of
                        customer service.
                    </p>


                    <p>
                        I am also passionate about education and knowledge
                        sharing. I provide online instruction in frontend,
                        backend, full-stack, and WordPress development,
                        alongside English and Yoruba language tutoring.
                    </p>

                    <p>
                        I hold a Bachelor of Arts in Linguistics from the
                        University of Ilorin and a Diploma in Cargo Handling
                        Operations from Earofly Institute of Technology.
                        My educational and professional background has
                        strengthened my communication, organizational,
                        analytical, and problem-solving abilities.
                    </p>

                    <p>
                        I am interested in opportunities where I can
                        contribute my technical expertise, customer-focused
                        approach, and collaborative mindset to international
                        teams. I am open to remote opportunities in web
                        development, technical support, customer success,
                        and related roles.
                    </p>

                    <Link href="/projects" className="text-link">
                        Explore My Projects →
                    </Link>
                </div>


                <div className="about-profile">
                    <Image
                        src="/img1.jpeg"
                        alt="Mary Abioye portrait"
                        width={220}
                        height={220}
                        className="profile-circle"
                    />
                </div>
            </section>

            <section className="section-light">
                <div className="content-container">
                    <p className="section-eyebrow">
                        MY PASSIONS
                    </p>

                    <h2 className="section-title">
                        What I&apos;m Passionate About
                    </h2>

                    <div className="profession-grid">
                        {[
                            "Building useful websites and web applications",
                            "Teaching technology and digital skills",
                            "Teaching English and Yoruba languages",
                            "Delivering excellent customer experiences",
                            "Continuous learning and professional development",
                        ].map((passion) => (
                            <div className="profession-card" key={passion}>
                                <p>{passion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                © 2026 Mary Abioye. All rights reserved.
            </footer>
        </main>
    );
}
