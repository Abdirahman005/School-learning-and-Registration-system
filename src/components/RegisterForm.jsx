import React from 'react';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  return (
    <form className="form">
      <h2>Student Registration</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Student ID" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
