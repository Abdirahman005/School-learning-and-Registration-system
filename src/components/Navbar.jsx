import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>ABC School</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link> {/* ✅ New link added */}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
