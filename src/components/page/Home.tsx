import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-start hero-content">
            <h5 className="text-primary-violet fw-bold mb-3">HOLA, SOY BELÉN ANTÚNEZ</h5>
            <h1 className="hero-title mb-4">
              Frontend <span>Designer</span> <br /> & Developer
            </h1>
            <p className="hero-description mb-5">
              Apasionada por el diseño web moderno y el desarrollo de interfaces 
              limpias, atractivas y funcionales. Combino estética y tecnología 
              para crear experiencias digitales únicas.
            </p>
            <div className="hero-btns d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <Link to="/projects" className="btn btn-primary-custom">
                Ver Mis Proyectos
              </Link>
              <Link to="/contacto" className="btn btn-outline-custom">
                Trabajemos Juntos
              </Link>
            </div>
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0 text-center position-relative">
            <div className="hero-image-wrapper mx-auto">
              <div className="hero-bg-glow"></div>
              <img src="/img/img.png" alt="Belén Antúnez" className="hero-img img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

