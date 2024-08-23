import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Our Library Management System</h1>
        <p className="hero-subtitle">Explore a wide range of books and manage your borrowing with ease.</p>
        <Link to="/Signup" className="viewbook button">View Books</Link>
      </div>
    </div>
  );
};

export default Home;
