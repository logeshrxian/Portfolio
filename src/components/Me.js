import React, { useEffect, useRef } from 'react';
import './Me.css';

const Me = () => {
  const meRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class to flip cards when the section is in view
            entry.target.classList.add('flip');
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to trigger the animation when half of the section is visible
    );

    const meSection = meRef.current;
    if (meSection) {
      observer.observe(meSection);
    }

    // Clean up the observer on unmount
    return () => {
      if (meSection) {
        observer.unobserve(meSection);
      }
    };
  }, []);

  return (
    <div className="me-page" ref={meRef}>
      <h1>About Me</h1>
      <div className="me-content">
        <div className="me-column schooling">
          <div className="me-column-inner">
            <div className="me-column-front">
              <h2>My Schooling</h2>
              <div className="schooling-info">
                <h3>10th STD</h3>
                <h4>St.Joseph's Matric Higher Secondary School, Chengalpattu</h4>
                <p>Passed out in 2018</p>
                <h3>12th STD</h3>
                <h4>St.Joseph's Matric Higher Secondary School, Chengalpattu</h4>
                <p>Passed out in 2020</p>
              </div>
            </div>
            <div className="me-column-back">
              
            </div>
          </div>
        </div>
        <div className="me-column college">
          <div className="me-column-inner">
            <div className="me-column-front">
              <h2>My College</h2>
              <div className="college-info">
                <p>
                  <strong>College Name:</strong> B.S.Abdur Rahman Institute of Science and Technology, Chennai
                </p>
                <p>
                  <strong>Course Name:</strong> Bachelor of Computer Applications
                </p>
                <p>
                  <strong>CGPA:</strong> 7.9
                </p>
              </div>
            </div>
            <div className="me-column-back">
             
            </div>
          </div>
        </div>
        <div className="me-column skills">
          <div className="me-column-inner">
            <div className="me-column-front">
              <h2>My Skills</h2>
              <div className="skills-list">
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
                      <p>HTML</p>
                    </div>
                    <div className="skill-back">
                     
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />
                      <p>CSS</p>
                    </div>
                    <div className="skill-back">
                   
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="JavaScript" />
                      <p>JavaScript</p>
                    </div>
                    <div className="skill-back">
                     
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="React" />
                      <p>React</p>
                    </div>
                    <div className="skill-back">
                     
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                      <p>GitHub</p>
                    </div>
                    <div className="skill-back">
                
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/636/636463.png" alt="Jira" />
                      <p>Jira</p>
                    </div>
                    <div className="skill-back">
                    
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <div className="skill-front">
                      <img src="https://cdn-icons-png.flaticon.com/512/4266/4266904.png" alt="Agile" />
                      <p>Agile Methodology</p>
                    </div>
                    <div className="skill-back">
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="me-column-back">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
