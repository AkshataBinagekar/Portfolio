import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
       <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li><Link to="/" className='link' >About</Link></li>
        <li><Link to="/skills"  className='link'>Skills</Link></li>
        <li><Link to="/education"  className='link'>Education</Link></li>
        <li><Link to="/projects" className='link'>Projects</Link></li>
        <li><Link to="/experience"  className='link'>Experience</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
