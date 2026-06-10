import { Container, Card } from 'react-bootstrap';

function Carrito({ carrito }) {
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
                        <Card.Text>
                            Subtotal: $
                            {(item.precio * item.cantidad).toLocaleString()}
                        </Card.Text>
                    </Card.Body>
                </Card>))
            )}
            <h3 className="mt-4">Total: ${total.toLocaleString()}</h3>
        </Container>
    );
}

export default Carrito;