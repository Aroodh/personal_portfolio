import React from 'react';
import Nav from './Nav';

const Education = () => {
  const st = {
    padding: '75px',
  };

  return (
    <div className="Education">
      <div style={st}>
        <Nav />
      </div>
      <div className="edu-container">
        <h1 className="edu-timeline">2020 - 2026</h1>
        <div className="edu-content">
          <div className="edu-overview">
            <h1>EDUCATION</h1>
            <hr />
            <p>
              I completed my secondary education with a strong academic foundation, followed by pre-university studies in PCMB, which sharpened my analytical skills. Currently pursuing a B.Tech in Computer Science, I am gaining expertise in programming, software development, and modern technologies, preparing me for a career in tech.
            </p>
          </div>
          <div className="edu-details">
            <div className="edu-card">
              <h1>Secondary School</h1>
              <h3>Govt Adarasha Vidyalaya Khanagaon | 2020</h3>
            </div>
            <div className="edu-card">
              <h1>Pre-University College</h1>
              <h3>Govt PU College Majalatti | P C M B | 2022</h3>
            </div>
            <div className="edu-card">
              <h1>Bachelor Degree</h1>
              <h3>SDM Institute of Technology | Computer Science and Engineering | Currently pursuing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;