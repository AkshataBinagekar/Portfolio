import React from 'react'
import './Project.css'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Navbar from '../Components/Navbar'
function Project() {
  return (
    <div className='project'>
      <div className="card">
        <Card1 />
        <Card2 />
      </div>
      <div className='sample'>
<Navbar/>
<div className='box1'>
<span className='mini-box'>
<a href="https://funny-fudge-69a0e3.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 1</a>
</span>
<span className='mini-box'>
<a href="https://stirring-wisp-55b4d5.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 2</a>
</span>
<span className='mini-box'>
<a href="https://serene-frangollo-5335b9.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 3</a>
</span>
<span className='mini-box'>
<a href="https://comforting-axolotl-61ca38.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 4</a>
</span>
<span className='mini-box'>
<a href="https://gleeful-profiterole-37dd61.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 5</a>
</span>
<span className='mini-box'>
<a href="https://incandescent-cascaron-e18606.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 6</a>
</span>
<span className='mini-box'>
<a href="https://wondrous-gelato-f8c86d.netlify.app/" target="_blank" rel="noopener noreferrer">UI DESIGN 7</a>
</span>

</div>
<div className='box2'>
<span className='mini-box'><a href="https://unrivaled-lily-6aae86.netlify.app/" target="_blank" rel="noopener noreferrer">E-COMMERCE </a></span>
<span className='mini-box'>
<a href="https://skillboost-lyart.vercel.app/" target="_blank" rel="noopener noreferrer"> SKILLBOOST</a>
</span>
<span className='mini-box'>
    portfolio
</span>
<span className='mini-box'>
portfolio
</span>
</div>
      </div>
    </div>
  )
}

export default Project
