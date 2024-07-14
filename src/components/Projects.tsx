// Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { name: 'Project 1', imageUrl: 'project1.jpg', link: 'https://project1.com' },
    { name: 'Project 2', imageUrl: 'project2.jpg', link: 'https://project2.com' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.imageUrl} alt={project.name} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
