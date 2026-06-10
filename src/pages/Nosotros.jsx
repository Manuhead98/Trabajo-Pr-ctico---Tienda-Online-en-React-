import { Container, Row, Col, Card } from "react-bootstrap";

function Nosotros() {
  return (
    <Container className="mt-5 mb-5">

      <div className="text-center mb-5">
        <h1>Sobre Nosotros</h1>
        <p className="lead">
          En CellStore nos apasiona la tecnología y trabajamos para acercarte
          los mejores smartphones del mercado al mejor precio.
        </p>
      </div>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center">
              <h3>📱 Calidad</h3>
              <p>
                Trabajamos con las marcas líderes del mercado para ofrecer
                equipos confiables y de última generación.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center">
              <h3>🚚 Envíos</h3>
              <p>
                Realizamos envíos y coordinamos retiros para que recibas tu
                compra de manera rápida y segura.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center">
              <h3>⭐ Atención</h3>
              <p>
                Buscamos brindar una experiencia de compra simple, cómoda y con
                atención personalizada.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <h2>Nuestra Historia</h2>
          <p>
            CellStore nació como un proyecto orientado a la venta online de
            smartphones, ofreciendo una amplia variedad de modelos de Samsung,
            Apple, Xiaomi, Motorola, Google y otras marcas reconocidas.
          </p>

          <p>
            Nuestro objetivo es que los usuarios puedan comparar productos,
            consultar sus características y realizar compras de manera rápida y
            sencilla desde cualquier dispositivo.
          </p>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default Nosotros;