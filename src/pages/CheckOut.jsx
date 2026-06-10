import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function CheckOut({ carrito }) {
    console.log("CHECKOUT", carrito);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [entrega, setEntrega] = useState("Retiro en local");
    const [mensaje, setMensaje] = useState("");
    const [compraRealizada, setCompraRealizada] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !email || !telefono || !direccion) {
            alert("Complete todos los campos obligatorios");
            return;
        }

        if (!email.includes("@")) {
            alert("Ingrese un email válido");
            return;
        }

        if (carrito.length === 0) {
            alert("El carrito está vacío");
            return;
        }

        setCompraRealizada(true);
    };

    return (
        <Container className="mt-4">
            <h1>Finalizar Compra</h1>

            {compraRealizada && (
                <Alert variant="success">
                    ¡Compra realizada con éxito!
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Método de entrega</Form.Label>
                    <Form.Select
                        value={entrega}
                        onChange={(e) => setEntrega(e.target.value)}
                    >
                        <option>Retiro en local</option>
                        <option>Envío a domicilio</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Aclaraciones</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Confirmar Compra
                </Button>
            </Form>
        </Container>
    );
}

export default CheckOut;