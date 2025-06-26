import React, { useState } from 'react';
import '../styles/enrollForm.css';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}, your enrollment request for ${formData.course} has been received.`);
    // You can replace the alert with your actual form handling logic (API, DB, etc.)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  return (
    <div className="enroll-form-container">
      <h3>Enroll in a Course</h3>
      <form className="enroll-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select a Course</option>
          <option value="HTML5">HTML5</option>
          <option value="CSS3">CSS3</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Computer Packages">Computer Packages</option>
          <option value="Git & Version Control">Git & Version Control</option>
        </select>

        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Enrollment</button>
      </form>
    </div>
  );
};

export default EnrollForm;
