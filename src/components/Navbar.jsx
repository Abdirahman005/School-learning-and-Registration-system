import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>TechHive Bootcamp School</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link> 
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
