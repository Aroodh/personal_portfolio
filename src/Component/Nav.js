import React from 'react';

const Nav = () => {
  const lastPart = window.location.pathname.split('/').filter(Boolean).pop();
  const navStyle = {
    color: lastPart === '/' ? 'aqua' : 'white',
  };

  return (
    <div className="Nav">
      <nav className="nav">
        <span id="Homenav" onClick={() => (window.location.href = '/')} style={navStyle}>
          <span className="name">AROODH KALLOLI</span>
        </span>
        <span id="AboutInNav" onClick={() => (window.location.href = '/about')} style={{ color: lastPart === 'about' ? 'aqua' : 'white' }}>
          ABOUT ME
        </span>
        <span id="EduInNav" onClick={() => (window.location.href = '/education')} style={{ color: lastPart === 'education' ? 'aqua' : 'white' }}>
          EDUCATION
        </span>
        <span id="ExpInNav" onClick={() => (window.location.href = '/experience')} style={{ color: lastPart === 'experience' ? 'aqua' : 'white' }}>
          EXPERIENCE
        </span>
        <span id="ProInNav" onClick={() => (window.location.href = '/projects')} style={{ color: lastPart === 'projects' ? 'aqua' : 'white' }}>
          PROJECTS
        </span>
        <span id="ContactInNav" onClick={() => (window.location.href = '/contact')} style={{ color: lastPart === 'contact' ? 'aqua' : 'white' }}>
          CONTACT
        </span>
      </nav>
    </div>
  );
};

export default Nav;