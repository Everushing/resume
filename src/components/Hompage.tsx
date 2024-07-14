// Homepage.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons library

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="intro-section">
        <h2>Welcome to My Resume!</h2>
        <p>I'm Evette Rushing, a smart and creative Software Engineer based in Detroit, MI. I have extensive experience building scalable web applications and a passion for clean code and user experience.</p>
      </div>
      <div className="social-links">
        <h3>Connect with Me</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/evette-rushing-3b696b279" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Everushing" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      <div className="resume-links">
        <h3>Explore My Resume</h3>
        <ul>
          <li><NavLink to="/summary">Summary</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
