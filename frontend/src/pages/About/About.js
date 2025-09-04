import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About PBL6 Machine Learning</h1>
      <p>
        This project is part of the PBL6 course, focusing on machine learning applications
        and web development integration.
      </p>
      <div className="about-content">
        <h2>Project Goals</h2>
        <ul>
          <li>Implement machine learning algorithms</li>
          <li>Create a user-friendly web interface</li>
          <li>Integrate frontend and backend systems</li>
          <li>Demonstrate practical ML applications</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
