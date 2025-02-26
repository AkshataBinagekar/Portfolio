import React, { useState, useEffect } from "react";
import './Card1.css';
import pic from '../Images/pic.jpg'

function Card1() {
  const [words] = useState(["Frontend Development", "Fullstack Development", "Software Development"]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setText((prev) => prev + currentWord[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]); 

  return (
    <div className="card1">
    <img src={pic} alt="pic" className="pic"/>
    <br></br>
      <span >Hi There!</span>
   
      <p>I’m</p>
      <h3>AKSHATA BINAGEKAR</h3>
      <p className="typing-text">
        I'm into <span className="typing">{text}</span><span className="cursor">|</span>
      </p>
    </div>
  );
}

export default Card1;
