import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Contacto.css'

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NOTA: Para que funcione, crea un formulario en https://formspree.io/
  // y pega el ID que te den aquí:
  const FORMSPREE_ID = "https://formspree.io/f/xvzdrnqr"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setResponseMessage("⚠️ Por favor, completa todos los campos.");
      setIsError(true);
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Limpiamos el ID por si pegaste la URL completa
      const cleanId = FORMSPREE_ID.split("/").pop();
      const response = await fetch(`https://formspree.io/f/${cleanId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setResponseMessage(`✅ ¡Gracias ${name}! Tu mensaje fue enviado con éxito.`);
        setIsError(false);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      setResponseMessage("❌ Hubo un problema al enviar el mensaje. Intenta de nuevo.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contacto-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <div className="contact-card glass-effect p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="section-title">Enviame un <span>Mensaje</span></h2>
                <p className="text-muted">¿Tenés una propuesta o alguna duda? ¡Escribime!</p>
              </div>

              <Form onSubmit={handleSubmit} className="contact-form-redesign">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label className="custom-label">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="custom-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="custom-label">Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="custom-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label className="custom-label">Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Escribí tu mensaje..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="custom-input"
                    required
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  className="btn-primary-custom w-100 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>

                {responseMessage && (
                  <div className={`mt-4 text-center fw-bold ${isError ? "text-danger" : "text-success"}`}>
                    {responseMessage}
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
