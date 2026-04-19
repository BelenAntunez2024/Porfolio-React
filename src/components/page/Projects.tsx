import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./Projects.css";

const projects = [
  {
    title: "Registro Geriátrico",
    description: "Sistema integral centrado en la gestión y seguimiento de residentes, médicos y turnos para instituciones geriátricas.",
    tech: ["React", "Node.js", "MySQL", "Bootstrap"],
    type: "Full Stack",
    link: "https://registrogeriatrico-project.onrender.com/"
  },
  {
    title: "Proyecto Final BackEnd",
    description: "API robusta para la gestión de datos, usuarios e inventarios con seguridad y escalabilidad.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    type: "Backend",
    link: null
  },
  {
    title: "Tienda Online Wisteria",
    description: "E-commerce moderno con integración de métodos de pago y gestión de carrito de compras en tiempo real.",
    tech: ["TypeScript", "React", "CSS3", "API Rest", "Figma"],
    type: "Frontend",
    link: "https://wisteriafront.onrender.com/"
  }
];

const Projects = () => {
  return (
    <section className="projects-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-primary-violet fw-bold mb-2">MI PORTAFOLIO</h5>
          <h2 className="section-title">Trabajos <span>Terminados</span></h2>
          <p className="section-subtitle mx-auto">
            Una selección de proyectos donde aplico mis conocimientos en desarrollo frontend, backend y diseño UX/UI.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={6} xl={4}>
              <Card className="project-card glass-effect h-100">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="project-type-badge mb-2">
                    <Badge bg="none" className="badge-custom">{project.type}</Badge>
                  </div>
                  <Card.Title className="project-title mb-3">{project.title}</Card.Title>
                  <Card.Text className="project-desc mb-4 flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="project-footer">
                    <div className="tech-stack mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-light btn-project-view w-100"
                      >
                        Ver Detalles
                      </a>
                    ) : (
                      <Button variant="outline-light" className="btn-project-view w-100" disabled>
                        Próximamente
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
