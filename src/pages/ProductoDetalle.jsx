import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import productos from '../data/productos';

function ProductoDetalle({ agregarAlCarrito }) {

    const { id } = useParams();

    const producto = productos.find(
        p => p.id === Number(id)
    );

    if (!producto) {
        return (
            <Container className="mt-4">
                <h2>Producto no encontrado</h2>
            </Container>
        );
    }

    return (
        <Container className="mt-5">

            <Row>
                <Col md={6}>
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="img-fluid rounded shadow"
                    />
                </Col>

                <Col md={6}>
                    <h1>{producto.nombre}</h1>

                    <Badge bg="secondary">
                        {producto.categoria}
                    </Badge>

                    <h3 className="mt-3">
                        ${producto.precio.toLocaleString()}
                    </h3>

                    <p className="mt-3">
                        {producto.descripcion}
                    </p>

                    <p>
                        <strong>Stock:</strong>{" "}
                        {producto.stock > 0 ? (
                            <Badge bg="success">
                                Disponible ({producto.stock})
                            </Badge>
                        ) : (
                            <Badge bg="danger">
                                Sin stock
                            </Badge>
                        )}
                    </p>

                    <h5>Características</h5>

                    <ul>
                        {producto.caracteristicas.map((caracteristica, index) => (
                            <li key={index}>
                                {caracteristica}
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex gap-2">

                        <Button
                            as={Link}
                            to="/productos"
                            variant="secondary"
                        >
                            Volver
                        </Button>

                        <Button
                            variant="success"
                            disabled={producto.stock === 0}
                            onClick={() => agregarAlCarrito(producto)}
                        >
                            Agregar al carrito
                        </Button>

                    </div>

                </Col>

            </Row>

        </Container>
    );
}

export default ProductoDetalle;