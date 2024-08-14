import React from 'react';
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        {/* <p>&copy; {new Date().getFullYear()} Logesh Dayaram. All Rights Reserved.</p> */}
        <h1>Contact</h1>
        <div className="footer-icons">
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPQzV1ZvqRzbfrHcrav4Ys5UmOt7Lup0N0g&s`} alt="Naukri" />
          </a>
          <a href="https://www.linkedin.com/in/logesh-d-5a4020275/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ROYwMw-kIa7CtiuUPV-GlYCt4uNIvmGwpQ&s`} alt="Linkedin" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUYXW_VBPFv8qyCqqsUNd5_p5FpjE7iPPmw&s`} alt="Whatsapp" />
          </a>
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-77gHQ72UCeDITjNeQllasUa3lFBPOH_N8w&s`} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
