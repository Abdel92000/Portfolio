import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets personnels sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Site Méteo "
              description="Découvrez mon site météo interactif où vous pouvez obtenir des prévisions en temps réel pour n'importe quelle ville dans le monde. Ce projet, développé avec HTML, CSS et JavaScript, offre une interface simple et intuitive pour consulter les conditions climatiques actuelles et futures."
              ghLink="https://github.com/Abdel92000/Site-Meteo"
              demoLink="https://abdel92000.github.io/Site-Meteo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Agence de voyages"
              description="Découvrez mon site web pour une agence de voyage, où vous pouvez explorer des destinations, consulter des offres et obtenir des informations détaillées sur chaque lieu. Conçu avec HTML, CSS et JavaScript, ce projet illustre mes compétences en développement de sites web modernes et interactifs"
              ghLink="https://github.com/Abdel92000/Site-Web-d-Agence-de-Voyage?tab=readme-ov-file"
              demoLink="https://abdel92000.github.io/Site-Web-d-Agence-de-Voyage/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
