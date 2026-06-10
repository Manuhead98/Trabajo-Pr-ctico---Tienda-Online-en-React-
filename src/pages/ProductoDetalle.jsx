import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductoDetalle({ agregarAlCarrito }) {
    const { id } = useParams();

    const producto = productos.find(
        (p) => p.id === parseInt(id)
    );

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div className="container mt-4">
            <Card>
                <Card.Img
                    variant="top"
                    src={producto.imagen}
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                />

                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>

                    <Card.Text>
                        <strong>Categoría:</strong> {producto.categoria}
                    </Card.Text>

                    <Card.Text>
                        <strong>Precio:</strong> ${producto.precio}
                    </Card.Text>

                    <Card.Text>
                        <strong>Stock:</strong> {producto.stock}
                    </Card.Text>

                    <Card.Text>
                        {producto.descripcion}
                    </Card.Text>

                    <Button
                        variant="success"
                        onClick={() => agregarAlCarrito(producto)}
                        disabled={producto.stock === 0}
                    >
                        Agregar al carrito
                    </Button>

                    <Link to="/productos">
                        <Button variant="secondary" className="ms-2">
                            Volver
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductoDetalle;