import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const skillGroups = [
  {
    category: "Full Stack & Logic",
    skills: [
      { name: "JavaScript", desc: "Desarrollo de lógica compleja e interactividad." },
      { name: "Node.js", desc: "Construcción de APIs y lógica de servidor robusta." },
      { name: "TypeScript", desc: "Programación tipada para código más seguro." }
    ]
  },
  {
    category: "Frontend Experience",
    skills: [
      { name: "React", desc: "Creación de interfaces dinámicas y componentes reutilizables." },
      { name: "HTML5 & CSS3", desc: "Estructura semántica y diseño visual avanzado." },
      { name: "Bootstrap", desc: "Diseño responsivo y prototipado rápido." }
    ]
  },
  {
    category: "Data & Persistence",
    skills: [
      { name: "MySQL", desc: "Gestión de bases de datos relacionales y consultas SQL." },
      { name: "MongoDB", desc: "Modelado de datos flexible en entornos NoSQL." },
      { name: "HTTP-Requests", desc: "Integración eficiente entre cliente y servidor." }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-primary-violet fw-bold mb-2">MI EXPERIENCIA</h5>
          <h2 className="section-title">Habilidades <span>Técnicas</span></h2>
          <p className="section-subtitle mx-auto">
            Dominio de tecnologías clave para el desarrollo de soluciones digitales completas, 
            desde la interfaz de usuario hasta la arquitectura del servidor.
          </p>
        </div>

        {skillGroups.map((group, gIdx) => (
          <div key={gIdx} className="mb-5">
            <h4 className="group-category-title mb-4">{group.category}</h4>
            <Row className="g-4">
              {group.skills.map((skill, sIdx) => (
                <Col key={sIdx} md={6} lg={4}>
                  <Card className="skill-card glass-effect h-100">
                    <Card.Body>
                      <Card.Title className="skill-name">{skill.name}</Card.Title>
                      <Card.Text className="skill-desc">
                        {skill.desc}
                      </Card.Text>
                      <div className="skill-progress-bar">
                        <div className="skill-progress-fill"></div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;