import React, { useState } from 'react';
import '../styles/courseDetail.css';
import { Link } from 'react-router-dom';

const CourseDetail = ({ course }) => {
  const [openModule, setOpenModule] = useState(null);
  return (
    <div className="course-detail">
      {course.icon}
      <h2>{course.title}</h2>
      <p className="cost-duration">
        <span>💲{course.cost}</span> • <span>{course.duration}</span>
      </p>
      <p className="desc">{course.description}</p>

      <div className="modules">
        {course.modules.map((m, idx) => (
          <div key={idx} className="module">
            <button onClick={() => setOpenModule(openModule === idx ? null : idx)}>
              {m.title}
            </button>
            {openModule === idx && <p className="module-content">{m.content}</p>}
          </div>
        ))}
      </div>

      <div className="enroll">
        <h3>Enroll Now</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Enrolled in ' + course.title); }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Enroll</button>
        </form>
        <Link to="/courses" className="back">← Back to courses</Link>
      </div>
    </div>
  );
};

export default CourseDetail;
