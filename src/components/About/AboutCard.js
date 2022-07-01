import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bishal Dali </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />I am a student pursuing Bachelor Degree of Information Technology in University of Wolverhampton.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create path according to your journey!"{" "}
          </p>
          <footer className="blockquote-footer">Bishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
