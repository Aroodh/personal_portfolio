import React from 'react';
import Nav from './Nav';

const styleExperi = {
  padding: '20px', // Reduced to fit fixed nav
};

const Experience = () => {
  return (
    <div className="Experience">
      <div style={styleExperi}>
        <Nav />
      </div>
      <div className="experience-container">
        <h1 className="experience-title">My Experience</h1>
        <div className="experience-content">
          <div className="experience-card">
            <h2>Fusion Techathon 3.0</h2>
            <p>
              Participated in Fusion Techathon 3.0, a prestigious technical competition conducted by Alva's Institute of Engineering & Technology, Moodbidri, Mangalore, D.K., Karnataka. This event challenged my problem-solving and technical skills, providing hands-on experience in collaborative innovation and cutting-edge technology applications.
            </p>
          </div>
          <div className="experience-card">
            <h2>Google Cloud Project Fundamentals for DevOps</h2>
            <p>
              Attended a three-day workshop on Google Cloud Project Fundamentals for DevOps, conducted by SDM Institute of Technology, Ujire, and sponsored by KSCST. This program offered in-depth training on cloud infrastructure, DevOps practices, and project deployment, enhancing my skills in scalable system design and modern development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;