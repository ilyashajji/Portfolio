import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> HAJJI ILYAS</span>
            from <span className="purple"> CASABLANCA,MOROCCO .</span>
            <br />
            <p> I am a passionate Full Stack developer with 
               a strong commitment to continuous learning and a proactive 
               approach to professional development. My enthusiasm for 
               development is accompanied by excellent communication and
                problem-solving skills, essential soft skills that enhance 
                my technical proficiency. I am eager to embrace new challenges 
                and explore opportunities for personal and career growth..</p>
               
               </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ilyas hajji</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;