import React, { useState } from 'react';
import Navbar from './NavbarSecond';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Blog.css';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample array of blog posts
  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content for Blog Post 1', imageUrl: 'https://via.placeholder.com/150', },
    { id: 2, title: 'Blog Post 2', content: 'Content for Blog Post 2', imageUrl: 'https://via.placeholder.com/150', },
    { id: 3, title: 'Blog Post 3', content: 'Content for Blog Post 3', imageUrl: 'https://via.placeholder.com/150', },
    { id: 4, title: 'Blog Post 4', content: 'Content for Blog Post 4', imageUrl: 'https://via.placeholder.com/150', },
    { id: 5, title: 'Blog Post 5', content: 'Content for Blog Post 5', imageUrl: 'https://via.placeholder.com/150', },
    { id: 6, title: 'Blog Post 6', content: 'Content for Blog Post 6', imageUrl: 'https://via.placeholder.com/150', },
    { id: 7, title: 'Blog Post 7', content: 'Content for Blog Post 7', imageUrl: 'https://via.placeholder.com/150', },
    { id: 8, title: 'Blog Post 8', content: 'Content for Blog Post 8', imageUrl: 'https://via.placeholder.com/150', },
    { id: 9, title: 'Blog Post 9', content: 'Content for Blog Post 9', imageUrl: 'https://via.placeholder.com/150', },
    { id: 10, title: 'Blog Post 10', content: 'Content for Blog Post 10', imageUrl: 'https://via.placeholder.com/150', },
    { id: 11, title: 'Blog Post 11', content: 'Content for Blog Post 11', imageUrl: 'https://via.placeholder.com/150', },
    { id: 12, title: 'Blog Post 12', content: 'Content for Blog Post 12', imageUrl: 'https://via.placeholder.com/150', },
    { id: 13, title: 'Blog Post 13', content: 'Content for Blog Post 13', imageUrl: 'https://via.placeholder.com/150', },
    { id: 14, title: 'Blog Post 14', content: 'Content for Blog Post 14', imageUrl: 'https://via.placeholder.com/150', },
    { id: 15, title: 'Blog Post 15', content: 'Content for Blog Post 15', imageUrl: 'https://via.placeholder.com/150', },
    { id: 16, title: 'Blog Post 16', content: 'Content for Blog Post 16', imageUrl: 'https://via.placeholder.com/150', },
    { id: 17, title: 'Blog Post 17', content: 'Content for Blog Post 17', imageUrl: 'https://via.placeholder.com/150', },
    { id: 18, title: 'Blog Post 18', content: 'Content for Blog Post 18', imageUrl: 'https://via.placeholder.com/150', },
    { id: 19, title: 'Blog Post 19', content: 'Content for Blog Post 19', imageUrl: 'https://via.placeholder.com/150', },
    { id: 20, title: 'Blog Post 20', content: 'Content for Blog Post 20', imageUrl: 'https://via.placeholder.com/150', },
  ];

  const headingStyle = {
    textAlign: 'center',
    textDecoration: 'underline'
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Function to filter blog posts based on search query
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredPosts.length / 9); // Show 9 blogs per page

  // Pagination logic
  const indexOfLastPost = currentPage * 9;
  const indexOfFirstPost = indexOfLastPost - 9;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <br /><br />
      <div className="blog-container">
      <h1 style={headingStyle}>Blogs</h1>
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
        <div className="blog-list">
          {currentPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className="blog-content">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button className="read-more">Read More</button>
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
      <Footer />
    </>
  );
};

export default Blogs;
