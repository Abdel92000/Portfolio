import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous,<span className="purple"> je suis Rahal Abdelghani </span>
            basé à <span className="purple"> Paris.</span>
            <br />
            Je suis actuellement étudiant chez OpenClassrooms, préparant un Bac +2.
            <br />
            J'ai un baccalauréat scientifique avec une spécialité en Mathématiques et SVT.
            <br />
            <br />
            En dehors du codage, voici quelques autres activités que j'aime pratiquer :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Natation
            </li>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>

          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
