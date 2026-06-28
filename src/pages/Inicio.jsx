import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

import productos from "../data/productos";
function Inicio({ agregarAlCarrito, carrito }) {
    return (
        <>
            <Carousel />
            <Container className="my-5 text-center">
                <h1>CellStore</h1>
                <p>
                    Especialistas en smartphones Samsung,
                    Apple, Xiaomi y Motorola.
                </p>
                <Button
                    as={Link}
                    to="/productos"
                    size="lg"
                >
                    Ver Catálogo
                </Button>

            </Container>
            <Container>
                <h2 className="mb-4">
                    Productos Destacados
                </h2>
                <Row>
                    {productos.slice(0, 4).map(producto => (
                        <Col md={3} key={producto.id}>
                            <ProductCard producto={producto} agregarAlCarrito={agregarAlCarrito} carrito={carrito} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Inicio;