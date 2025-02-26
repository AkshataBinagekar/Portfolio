import React from "react";
import "./Education.css";
import Card1 from "../Components/Card1";
import Card2 from "../Components/Card2";
import Navbar from "../Components/Navbar";
import collage from "../Images/collage.jpg";
import resume from '../Images/Akshata.Binagekar_Resume.pdf';

function Education() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume; // Use imported file as URL
        link.download = "Akshata_Resume.pdf"; // Set the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
  return (
    <div className="education">
      <div className="card">
        <Card1 />
        <Card2 />
      </div>
      <div className="collage">
        <Navbar />
        <div className="card4">
          <div className="collage-img">
            <img src={collage} alt="collage" />
          </div>
          <div className="collage-name">
            <p>PADRE CONCEICAO COLLEGE OF ENGINEERING</p>
            <span>Verna,Goa-India</span>
            <span>CGPA: 7.91</span>
          </div>
        
        </div>
        <button className="btn" onClick={handleDownload}>Download Resume</button>
      </div>
    </div>
  );
}

export default Education;
