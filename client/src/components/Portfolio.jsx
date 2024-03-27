import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { id: 1, category: 'Web', title: 'IR Recordings', imageUrl: 'https://irrecordings.com/WitJab/assets/img/portfolio/irrecordings.png', link: 'https://irrecordings.com' },
    { id: 2, category: 'Web', title: 'NM INFOCOM', imageUrl: 'https://irrecordings.com/WitJab/assets/img/portfolio/nminfocom.png', link: 'http://nminfocom.in' },
    { id: 3, category: 'Web', title: 'Manas Nikte Portfolio site', imageUrl: 'https://irrecordings.com/WitJab/assets/img/portfolio/manasportfolio.png', link: 'https://manasnikte.netlify.app/' },
    { id: 4, category: 'Web', title: 'Daffodils Pre School', imageUrl: 'https://irrecordings.com/WitJab/assets/img/portfolio/daffodils-preschoool.png', link: 'https://daffodils-waghbil.netlify.app/' },
    { id: 5, category: 'Web', title: 'WitJab Old Site', imageUrl: 'https://irrecordings.com/WitJab/assets/img/portfolio/witjab.png', link: 'https://irrecordings.com/WitJab' },
    { id: 6, category: 'Web', title: 'Innoventures', imageUrl: 'https://irrecordings.com/Innoventures.png', link: 'https://innnoventures.netlify.app/' },
    { id: 7, category: 'Web', title: 'CodeCrafters', imageUrl: 'https://irrecordings.com/CodeCrafters.png', link: 'https://rudraksha.org.in/CodeCrafters2024/' },
  
    // { id: 6, category: 'App', title: 'Project 1 App', imageUrl: 'https://via.placeholder.com/150', link: 'https://example.com/project1' },
    // { id: 7, category: 'App', title: 'Project 2 App', imageUrl: 'https://via.placeholder.com/150', link: 'https://example.com/project2' },
    // { id: 8, category: 'App', title: 'Project 3 App', imageUrl: 'https://via.placeholder.com/150', link: 'https://example.com/project3' },
    // { id: 9, category: 'App', title: 'Project 4 App', imageUrl: 'https://via.placeholder.com/150', link: 'https://example.com/project3' },
    // { id: 10, category: 'App', title: 'Project 5 App', imageUrl: 'https://via.placeholder.com/150', link: 'https://example.com/project3' },
  ];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  
  const handleClick = (filter) => {
    setFilter(filter);
  };
  
  return (
    <div className="portfolio-container" id='projects'>
    <h1 style={{ fontSize: '48px', color: '#01bf71', textAlign: 'center' }}>Projects</h1>      <div className="filters">
        <button onClick={() => handleClick('All')}>All</button>
        <button onClick={() => handleClick('Web')}>Web</button>
        <button onClick={() => handleClick('App')}>App</button>
      </div>
      <div className="projects">
        {filteredProjects.map(project => (
          <div key={project.id} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
