import React from 'react'
import Nav from './Nav' 
function About() {
 const navstyle={
  padding:'75px'
 }
  return (
   
    <div className='About'>
         <div style={navstyle}> <Nav/></div>
          <div className='AboutContainer'>
            <h1>ABOUT ME</h1>
            <p className='para'>
            Hi there! I'm AROODH KALLOLI, a passionate Web Developer and Machine Learning enthusiast. I am dedicated to creating impactful digital experiences and diving deep into the world of data-driven solutions. With a solid foundation in front-end and back-end web development, I enjoy building responsive, user-friendly websites that bring ideas to life. I'm constantly refining my skills and embracing new challenges, always with the goal of providing seamless, intuitive, and scalable solutions.

Currently, I’m expanding my expertise by studying Machine Learning, where I focus on algorithms, data analysis, and predictive models. I enjoy solving complex problems and uncovering insights through data, and I’m excited about the intersection of web development and AI, where I can leverage both to create innovative applications</p>
          <h1>SKILLS & INTEREST</h1>
          <div>
          <h3>Python</h3>
          <h3>JavaScript</h3>
          <h3>React</h3>
          <h3>Oop's</h3>
          </div>
          <div>
          <h3>Music</h3>
          <h3>Sports</h3>
          <h3>Artificial Intelligence</h3>
          </div>
          </div>
    </div>
  )
}

export default About
