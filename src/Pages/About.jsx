import React from 'react'
import './About.css'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Navbar from '../Components/Navbar'
import pic from '../Images/pic.jpg'


function About() {
  return (
  <div className=' main'>
  <div className='card'>
      <Card1 />
      <Card2 />
      </div>
      <div className='about'>
<Navbar />
<div className='intro'>
<div className='profileImg'>
<img src={pic} alt='img'/>
</div>
<div className='aboutme'>
<h2>I'm Akshata Binagekar</h2>
<span>Frontend Developer | Passionate About Creating Engaging Web Experiences.</span>
<br></br>

<p>Based in Goa, India, I hold a Computer Engineering degree from PCCE and specialize in building intuitive, responsive, and performance-driven web applications. I enjoy transforming ideas into visually appealing, user-friendly interfaces while focusing on modern UI/UX principles, accessibility, and interactivity.
<br></br>
With expertise in React.js, JavaScript, HTML, and CSS, I am constantly learning and improving my skills. Currently, I am working on projects to refine my frontend development abilities while expanding my knowledge of backend technologies to evolve into a Full-Stack Developer.</p>
</div>

</div>
    </div>
    </div>
  )
}

export default About
