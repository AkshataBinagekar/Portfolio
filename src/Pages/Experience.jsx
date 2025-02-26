import React from 'react'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Navbar from '../Components/Navbar'
import './Experience.css'
function Experience() {
  return (
    <div className='experience'>
        <div className="card">
        <Card1 />
        <Card2 />
      </div>
      <div className='work'>
<Navbar />
<div className='work-experience1'>
<h4>ZEPHYRA</h4>
<p>Frontend Developer Intern</p>
<p>NOVEMBER 2024 – JANUARY 2024</p>
</div>
<div className='work-experience2'>
<h4>Internship Studio</h4>
<p>Website Desing and Development Intern </p>
<p>MAY 2024 – JUNE 2024</p>
</div>
<div className='work-experience3'>
<h4>Maxxcell Institute of Professional Studies Pvt Ltd</h4>
<p>Frontend Developer Intern </p>
<p>AUGUST 2022 – OCTOBER 2022
</p>
</div>
      </div>
    </div>
  )
}

export default Experience
