import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI  <span className="purple">ME PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je suis passionné par la programmation et j'ai acquis des compétences solides dans ce domaine.
              <br />
              <br />En tant que développeur front-end en recherche d'alternance, je suis à l'aise avec les technologies telles que
              <i>
                <b className="purple"> HTML, CSS, JavaScript, et React. </b>
              </i>
              <br />
              <br />
              Je suis particulièrement motivé pour créer &nbsp;
              <i>
                <b className="purple">des interfaces web modernes </b> et
                {" "}
                <b className="purple">
                  dynamiques
                </b>
              </i>
              <br />
              <br />
              <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}

                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouvez-moi sur </h1>
            <p>
              <span className="purple"> </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abdel92000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdelghani-rahal-a730b530a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
