import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="home">
      <img src="/school.jpg" alt="School" className="school-image" />
      <h1>Welcome to ABC School Registration System</h1>
       <h2>Empowering every learner with knowledge, skills, and confidence.</h2>
      <div className="home-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;
