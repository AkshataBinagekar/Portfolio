import React from 'react'
import './Card2.css'
function Card2() {
  return (
    <div className='card2'>
    <div className="info">
      <p><i className="fa-solid fa-location-dot"></i> Location:</p>
    
      <span>Goa, India</span>
    </div>
    <div className="info">
      <p><i className="fa-regular fa-envelope"></i> Email:</p>
      <a href="mailto:akshubinagekar@gmail.com?subject=Hello Akshata&body=I wanted to reach out to you.">
  akshubinagekar@gmail.com
</a>

    </div>
    <div className="info">
      <p><i className="fa-brands fa-github"></i> Github:</p>
      <a href="https://github.com/AkshataBinagekar?tab=repositories" target="_blank" rel="noopener noreferrer">AkshataBinagekar</a>
    </div>
    <div className="info">
      <p><i className="fa-brands fa-linkedin"></i> LinkedIn:</p>
      <a href="https://www.linkedin.com/in/akshata-binagekar-144b11316/" target="_blank" rel="noopener noreferrer">akshata-binagekar</a>
    </div>
  </div>
  
  )
}

export default Card2
