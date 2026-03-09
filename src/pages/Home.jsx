import React from "react";
import "../styles/App.css";

// Import icons from react-icons
import { SiHtml5, SiCss3, SiReact, SiPython, SiGit } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const courses = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "React", icon: <SiReact /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Computer Packages", icon: <FaLaptopCode /> },
  { name: "Git & Version Control", icon: <SiGit /> },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero image */}
      <img src="/my school.jpeg" alt="School" className="school-image" />

      <h1>Welcome to TechHive Bootcamp School </h1>
      <h2>Empowering every learner with knowledge, skills, and confidence.</h2>

      {/* Courses list with icons */}
      <div className="container">
        <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          Courses Offered
        </h2>

        {/* Flex layout */}
        <div className="courses-flex">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <span className="course-icon">{course.icon}</span>
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;