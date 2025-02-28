import React from 'react';
import Nav from './Nav';

const prj = {
  padding: '20px', // Reduced to fit fixed nav
};

function Project() {
  return (
    <div className="Project">
      <div style={prj}>
        <Nav />
      </div>
      <div className="project-container">
        <h1 className="project-title">My Projects</h1>
        <div className="project-content">
          <div className="project-card">
            <h2>Plant Disease Analyzer</h2>
            <p>
              A machine learning-powered tool designed to detect and diagnose plant diseases from images. Leveraging advanced algorithms and image recognition, this project helps farmers and gardeners identify issues early, offering insights and potential solutions to improve crop health and yield.
            </p>
          </div>
          <div className="project-card">
            <h2>AI Chat Box</h2>
            <p>
              An intelligent chatbot built using API keys from modern AI platforms. This project provides a conversational interface for users, capable of answering queries, assisting with tasks, and integrating seamlessly into websites or applications, enhancing user experience with natural language processing.
            </p>
          </div>
          <div className="project-card">
            <h2>Smart Waste Management</h2>
            <p>
              A web-based solution to track and manage city waste efficiently. This project features a user-friendly website that monitors waste levels, generates monthly reports for municipal centers, and offers data-driven insights to optimize waste collection and promote sustainable urban living.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;