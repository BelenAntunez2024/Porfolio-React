import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section py-4 mt-5">
      <Container className="text-center">
        <div className="footer-divider mb-4 mx-auto"></div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} — Diseñado y desarrollado con <span>💜</span> por <strong>Belen Antúnez</strong>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;