// Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header>
      <h1>Evette Rushing</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Summary</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
