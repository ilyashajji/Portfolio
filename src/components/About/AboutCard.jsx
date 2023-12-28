import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ILYAS HAJJI </span>
            from <span className="purple"> CASABLANCA,MOROCCO .</span>
            <br />
            <p> I am a fullstack developer currently in my second year at the Office of Vocational Training and Job Promotion.<br/>
              Enthusiastic about development, I am dedicated to my learning journey and always open to professional growth opportunities.
               Strong communication and problem-solving skills complement my technical expertise.</p>
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