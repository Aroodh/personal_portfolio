import React from 'react';
import Nav from './Nav';

function About() {
  const navStyle = {
    padding: '20px', // Reduced padding to fit premium fixed nav
  };

  return (
    <div className="About">
      <div style={navStyle}>
        <Nav />
      </div>
      <div className="AboutContainer">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <p className="about-description">
            Greetings! I’m AROODH KALLOLI, a dedicated Web Developer and Machine Learning aficionado. My passion lies in crafting exceptional digital experiences and exploring the realm of intelligent, data-driven solutions. With expertise spanning front-end and back-end development, I specialize in creating responsive, intuitive websites that transform concepts into reality. I thrive on challenges, continuously honing my craft to deliver sophisticated, scalable solutions.
            <br /><br />
            Presently, I’m delving into Machine Learning, mastering algorithms, data analytics, and predictive modeling. I’m captivated by the synergy of web technologies and AI, aiming to pioneer innovative applications that redefine user experiences.
          </p>
          <div className="skills-interests">
            <h2 className="section-title">Skills & Interests</h2>
            <div className="skills-grid">
              <span className="skill-item">Python</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">OOP</span>
              <span className="skill-item">Music</span>
              <span className="skill-item">Sports</span>
              <span className="skill-item">Artificial Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;