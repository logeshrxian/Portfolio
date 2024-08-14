import React, { useEffect, useState } from 'react';
import './ProjectPage.css'; // Import the CSS file for styling

const ProjectPage = ({ isVisible }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
    }
  }, [isVisible]);

  return (
    <div className="project-page">
      <h1>My Projects</h1>
      <div className={`project-card left-card ${animate ? 'animate-flip' : ''}`}>
        <h2>Project 1 😊</h2>
        <h3>Martha Jackson: An Online Shop for Silver Jewelry</h3>
        <p>
          I have recently worked on an E-commerce Website called "Martha
          Jackson" where I served as a Front End React Developer. Our goal is
          to create an engaging platform to buy products online. I focused on
          building dynamic and responsive user interfaces using React.
        </p>
      </div>
      <div className={`project-card right-card ${animate ? 'animate-flip' : ''}`}>
        <h2>Project 2 😊</h2>
        <h3>Our Vegan Shop</h3>
        <p>
          This project involves developing the landing page for the Vegan
          website. The website project is developed using HTML and CSS,
          incorporating responsive design principles with media queries to
          ensure optimal viewing across various devices and screen sizes. The
          design focuses on enhancing user engagement, accessibility, and
          performance, delivering a modern, user-centric interface that meets
          the highest standards of static web development.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
