import { Container, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Carrito({
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad
}) {
    //calculo el total del carrito sumando el precio por la cantidad de cada producto
    const total = carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);

    console.log("Carrito:", carrito);

    return (
        <Container className="mt-4">
            <h1>Carrito de Compras</h1>
            {carrito.length === 0 ? (<p>El carrito está vacío.</p>) : (carrito.map(item => (
                <Card
                    key={item.id}
                    className="mb-3"
                >
                    <Card.Body>
                        <Card.Title>
                            {item.nombre}
                        </Card.Title>
                        <Card.Text>
                            Precio: $
                            {item.precio.toLocaleString()}
                        </Card.Text>
                        <Card.Text>
                            Cantidad: {item.cantidad}
                        </Card.Text>
                        <div className="mb-3">
                        <Button
                            variant="success"
                            size="sm"
                            onClick={() => aumentarCantidad(item.id)}
                        >
                            +
                        </Button>

                        <Button
                            variant="warning"
                            size="sm"
                            className="mx-2"
                            onClick={() => disminuirCantidad(item.id)}
                        >
                            -
                        </Button>

                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => eliminarDelCarrito(item.id)}
                        >
                            Eliminar
                        </Button>
                    </div>
                        <Card.Text>
                            Subtotal: $
                            {(item.precio * item.cantidad).toLocaleString()}
                        </Card.Text>
                    </Card.Body>
                </Card>))
            )}
            <h3 className="mt-4">Total: ${total.toLocaleString()}</h3>
            <Button
                as={Link}
                to="/checkout"
                variant="primary"
                disabled={carrito.length === 0}
            >
                Finalizar Compra
            </Button>
        </Container>
    );
}

export default Carrito;