import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 py-4">

            <Container>

                <Row>

                    <Col md={4}>
                        <h5>CellStore</h5>
                        <p>
                            Tu tienda online especializada en smartphones.
                        </p>
                    </Col>

                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p>Email: contacto@cellstore.com</p>
                        <p>Tel: +54 11 1234-5678</p>
                    </Col>

                    <Col md={4}>
                        <h5>Ubicación</h5>
                        <p>Buenos Aires, Argentina</p>
                    </Col>

                </Row>

                <hr />

                <p className="text-center mb-0">
                    © 2026 CellStore - Todos los derechos reservados
                </p>

            </Container>

        </footer>
    );
}

export default Footer;