import React, { useState } from 'react';
import Navbar from './NavbarSecond';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Careers.css';

const Careers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample array of job listings
  const jobListings = [
    { id: 1, title: 'Software Engineer', type: 'Full-time', location: 'New York', salary: '$100,000 - $120,000', description: 'Description for Software Engineer position' },
    { id: 2, title: 'Data Scientist', type: 'Full-time', location: 'San Francisco', salary: '$120,000 - $150,000', description: 'Description for Data Scientist position' },
    { id: 3, title: 'Web Developer', type: 'Contract', location: 'Los Angeles', salary: '$80,000 - $100,000', description: 'Description for Web Developer position' },
    { id: 4, title: 'UI/UX Designer', type: 'Full-time', location: 'Chicago', salary: '$90,000 - $110,000', description: 'Description for UI/UX Designer position' },
    { id: 5, title: 'Product Manager', type: 'Full-time', location: 'Seattle', salary: '$130,000 - $150,000', description: 'Description for Product Manager position' },
    { id: 6, title: 'Marketing Specialist', type: 'Part-time', location: 'Boston', salary: '$70,000 - $90,000', description: 'Description for Marketing Specialist position' },
    { id: 7, title: 'HR Manager', type: 'Full-time', location: 'Dallas', salary: '$100,000 - $120,000', description: 'Description for HR Manager position' },
    { id: 8, title: 'Financial Analyst', type: 'Contract', location: 'Houston', salary: '$80,000 - $100,000', description: 'Description for Financial Analyst position' },
    { id: 9, title: 'Sales Representative', type: 'Full-time', location: 'Miami', salary: '$70,000 - $90,000', description: 'Description for Sales Representative position' },
    { id: 10, title: 'Customer Support Specialist', type: 'Full-time', location: 'Atlanta', salary: '$60,000 - $80,000', description: 'Description for Customer Support Specialist position' },
    { id: 11, title: 'Business Development Manager', type: 'Full-time', location: 'Denver', salary: '$110,000 - $130,000', description: 'Description for Business Development Manager position' },
    { id: 12, title: 'Content Writer', type: 'Part-time', location: 'Phoenix', salary: '$50,000 - $70,000', description: 'Description for Content Writer position' },
    { id: 13, title: 'Network Engineer', type: 'Full-time', location: 'Philadelphia', salary: '$90,000 - $110,000', description: 'Description for Network Engineer position' },
    { id: 14, title: 'Systems Administrator', type: 'Full-time', location: 'Detroit', salary: '$80,000 - $100,000', description: 'Description for Systems Administrator position' },
    { id: 15, title: 'Project Coordinator', type: 'Contract', location: 'Minneapolis', salary: '$70,000 - $90,000', description: 'Description for Project Coordinator position' },
    { id: 16, title: 'Quality Assurance Tester', type: 'Full-time', location: 'Portland', salary: '$75,000 - $95,000', description: 'Description for Quality Assurance Tester position' },
    { id: 17, title: 'Legal Counsel', type: 'Full-time', location: 'Washington, D.C.', salary: '$120,000 - $140,000', description: 'Description for Legal Counsel position' },
    { id: 18, title: 'Operations Manager', type: 'Full-time', location: 'San Diego', salary: '$110,000 - $130,000', description: 'Description for Operations Manager position' },
    { id: 19, title: 'Technical Writer', type: 'Part-time', location: 'Austin', salary: '$60,000 - $80,000', description: 'Description for Technical Writer position' },
    { id: 20, title: 'Graphic Designer', type: 'Full-time', location: 'Orlando', salary: '$70,000 - $90,000', description: 'Description for Graphic Designer position' },
  ];

  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const headingStyle = {
    textAlign: 'center',
    textDecoration: 'underline'
  };
  
  // Function to filter job listings based on search query
  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredJobs.length / 9); // Show 9 jobs per page

  // Pagination logic
  const indexOfLastJob = currentPage * 9;
  const indexOfFirstJob = indexOfLastJob - 9;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <br /><br />
      <div className="careers-container">
        <h1 style={headingStyle}>Careers</h1>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="job-list">
          {currentJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-info">
                <h2>{job.title}</h2>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p>{job.description}</p>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
          ))}
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default Careers;
