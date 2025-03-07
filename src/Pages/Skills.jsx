import React from "react";
import "./Skills.css";
import Card1 from "../Components/Card1";
import Card2 from "../Components/Card2";
import Navbar from "../Components/Navbar";
import netlify from '../Images/netlify.svg';
import materialui from '../Images/material-ui.svg';
import vercel from '../Images/vercel.svg';

function Skills() {
  return (
    <div className="skills">
      <div className="card">
        <Card1 />
        <Card2 />
      </div>
      <div className="tech">
        <Navbar />
        <div className="card3">
          <div className="content">
            <p>Languages:</p>
            <span><i class="fa-brands fa-html5 fa-lg"></i> HTML</span>
            <span><i class="fa-brands fa-css3 fa-lg"></i> CSS</span>
            <span> <i class="fa-brands fa-js fa-lg"></i> JAVASCRIPT</span>
          </div>
          <div className="content1">
            <p>Framework Tools:</p>
            <span><i class="fa-brands fa-react fa-lg"></i> REACT.JS </span>
            <span><i class="fa-brands fa-bootstrap fa-lg"></i> BOOTSTRAP </span>
            <span> <i class="fa-brands fa-node-js fa-lg"></i> NODE.JS </span>
            <span> <img width="20" height="20" src={materialui} alt="material-ui"/>MATERIAL.UI </span>
            <span ><img width="20" height="20" src="https://img.icons8.com/color/20/express-js.png" alt="express-js"/>EXPRESS.JS </span>
          </div>
          <div className="content">
            <p>Database:</p>
            <span> <i class="fa-solid fa-database fa-lg"></i> POSTGRESQL</span>
          </div>
          <div className="content">
            <p>Version Control:</p>
            <span> <i class="fa-brands fa-github"></i> GITHUB</span>
         
          </div>
          <div className="content">
            <p>Deplyoment:</p>
            <span> <img width="30" height="30" src={vercel} alt="deployment"/>VERCEL</span>
            <span> <img width="20" height="20" src={netlify} alt="deployment"/>NETLIFY</span>
         
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Skills;
