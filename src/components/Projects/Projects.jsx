import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import d from "../../Assets/Projects/d.png";
import j from "../../Assets/Projects/j.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d}
              isBlog={false}
              title="tic-tac-toe"
              description="X-O Games, l'endroit idéal pour défier vos amis ou tester vos compétences en jeu de réflexion. Plongez dans le classique indémodable du jeu de Morpion (Tic-Tac-Toe) avec une interface conviviale et une expérience de jeu interactive."
              ghLink="https://github.com/ilyashajji/xoxo-game/"
              demoLink="https://gregarious-maamoul-8558e7.netlify.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={j}
              isBlog={false}
              title="Todo-List"
              description="TodoApp is a simple task management application built with React. Users can add tasks, mark them as complete or incomplete, and delete tasks"
              ghLink="https://github.com/ilyashajji/TodoApp"
              demoLink="https://todo-app-ilyashajji.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;