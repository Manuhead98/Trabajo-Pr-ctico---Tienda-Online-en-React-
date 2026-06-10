import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ producto, agregarAlCarrito }) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={producto.imagen}
            />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Badge bg="secondary" className="mb-2">
                    {producto.categoria}
                </Badge>
                <Card.Text>${producto.precio.toLocaleString()}</Card.Text>
                <Card.Text>{producto.descripcion}</Card.Text>
                {producto.stock > 0 ? (<Badge bg="success"> Stock: {producto.stock}</Badge>) : (<Badge bg="danger"> Sin Stock </Badge>)}

                <div className="mt-3 d-flex gap-2">
                    <Button as={Link} to={`/producto/${producto.id}`} variant="primary">Ver Detalle</Button>
                    <Button variant="success" disabled={producto.stock === 0} onClick={() => agregarAlCarrito(producto)}>Agregar</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;