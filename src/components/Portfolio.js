import React, { useEffect, useRef } from 'react';
import './Portfolio.css';
import Me from './Me'; // Import the Me component
import ProjectPage from './ProjectPage'; // Import the ProjectPage component
import Footer from './Footer'; // Import the Footer component
import Myphoto from '../photo/My Profile.jpeg';

const Portfolio = () => {
  const projectRef = useRef(null);

  const handleScrollToMe = () => {
    // Scroll to the Me section smoothly
    window.scrollTo({
      top: document.getElementById('me-section').offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToProjects = () => {
    // Scroll to the Projects section smoothly
    window.scrollTo({
      top: document.getElementById('project-section').offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToContact = () => {
    // Scroll to the Footer (Contact) section smoothly
    window.scrollTo({
      top: document.getElementById('footer-section').offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when at least 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, options);

    const projectElements = projectRef.current.querySelectorAll('.project-card');
    projectElements.forEach((element) => observer.observe(element));

    return () => {
      projectElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <img
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPnx1o4FxQumeR9dMmXnkL59Fl0ElVcMBIA&s`}
          alt="Logo"
          className="portfolio-logo"
        />
        <nav className="portfolio-nav">
          <ul>
            <li>
              <span className="nav-link" onClick={handleScrollToMe}>ME</span>
            </li>
            <li>
              <span className="nav-link" onClick={handleScrollToProjects}>PROJECT</span>
            </li>
            <li>
              <span className="nav-link" onClick={handleScrollToContact}>Contact</span>
            </li>
          </ul>
        </nav>
      </header>

      <main className="portfolio-main">
        <div className="portfolio-info">
          <h2>Hello, I'm</h2>
          <h1>Logesh Dayaram</h1>
          <h3>Front-End Developer</h3>
          <div className="contact-info">
            <div className="contact-item">
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYEXgSto1uqaXCX7A-3fL03_kHoEwFeMJOA&s'
                }
                alt="Phone"
                className="contact-icon"
              />
              <span>+91 8072830059</span>
            </div>
            <div className="contact-item">
              <img
                src={
                  'https://static-00.iconduck.com/assets.00/gmail-icon-1024x1024-09wrt8am.png'
                }
                alt="Gmail"
                className="contact-icon"
              />
              <span>logesh1911@gmail.com</span>
            </div>
          </div>
          <p className="portfolio-title">Worked as a React Developer</p>
          <p className="portfolio-description">
            I have recently worked on an E-commerce Website called "Martha
            Jackson" where I served as a Front End React Developer. Our goal is
            to create an engaging platform to buy products online. I focused on
            building dynamic and responsive user interfaces using React.
          </p>
        </div>
        <div className="portfolio-image">
          <img src={Myphoto} alt="Logesh Dayaram" />
        </div>
      </main>

      {/* Render Me component here */}
      <section id="me-section">
        <Me />
      </section>

      {/* Render ProjectPage component here */}
      <section id="project-section" ref={projectRef}>
        <ProjectPage />
      </section>

      {/* Render Footer component here */}
      <footer id="footer-section">
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
