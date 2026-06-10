import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CheckOut({ carrito, setCarrito }) {
    const navigate = useNavigate();

    //estado del formulario
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        localidad: '',
        entrega: '',
        mensaje: ''
    });

    //estado para guardar los errores de validación
    const [errores, setErrores] = useState({});

    //estado para saber si el formulario fue enviado con éxito
    const [enviado, setEnviado] = useState(false);

    //funcion que actualiza el estado del formulario cada vez que el usuario escribe en un campo.
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    //funcion que valida si los campos obligatorios estan completos, sino devuelve un objeto con los mensajes de error encontrados
    const validar = () => {
        const nuevosErrores = {};

        if (!form.nombre.trim())
            nuevosErrores.nombre = 'El nombre es obligatorio.';

        if (!form.apellido.trim())
            nuevosErrores.apellido = 'El apellido es obligatorio.';

        if (!form.email.trim())
            nuevosErrores.email = 'El email es obligatorio.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            nuevosErrores.email = 'El email no tiene un formato válido.';

        if (!form.telefono.trim())
            nuevosErrores.telefono = 'El teléfono es obligatorio.';

        if (!form.localidad.trim())
            nuevosErrores.localidad = 'La localidad es obligatoria.';

        if (!form.entrega)
            nuevosErrores.entrega = 'Seleccioná un método de entrega.';

        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // evita que la página se recargue

        const erroresEncontrados = validar();

        //si hay algun error, se guarda en el estado de errores y se muestra en el formulario
        if (Object.keys(erroresEncontrados).length > 0) {
            setErrores(erroresEncontrados);
            return;
        }
        //si no hay ningun error, se muestra la pantalla de pedido enviado, se limpia el carrito y se redirige a la pag inicial
        setEnviado(true);
        setCarrito([]);
        setTimeout(() => navigate('/'), 3000);
    };

    //pantalla de pedido enviado
    if (enviado) {
        return (
            <Container className="mt-5 text-center">
                <Alert variant="success">
                    <h4>¡Pedido confirmado!</h4>
                    <p>Gracias {form.nombre}, tu pedido fue registrado correctamente.</p>
                    <p className="text-muted">Serás redirigido al inicio en unos segundos...</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4 mb-5" style={{ maxWidth: '550px' }}>
            <h2 className="mb-4">Finalizar Compra</h2>

            {/* Aviso si el carrito está vacío */}
            {carrito.length === 0 && (
                <Alert variant="warning">
                    Tu carrito está vacío. Agregá productos antes de continuar.
                </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate>

                <Form.Group className="mb-3">
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        isInvalid={!!errores.nombre}
                        placeholder="Juan"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.nombre}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido *</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        value={form.apellido}
                        onChange={handleChange}
                        isInvalid={!!errores.apellido}
                        placeholder="García"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.apellido}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        isInvalid={!!errores.email}
                        placeholder="juan@ejemplo.com"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono *</Form.Label>
                    <Form.Control
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        isInvalid={!!errores.telefono}
                        placeholder="11 1234-5678"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.telefono}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Localidad *</Form.Label>
                    <Form.Control
                        type="text"
                        name="localidad"
                        value={form.localidad}
                        onChange={handleChange}
                        isInvalid={!!errores.localidad}
                        placeholder="Buenos Aires, CABA"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.localidad}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Método de entrega *</Form.Label>
                    <Form.Select
                        name="entrega"
                        value={form.entrega}
                        onChange={handleChange}
                        isInvalid={!!errores.entrega}
                    >
                        <option value="">Seleccioná una opción</option>
                        <option value="domicilio">Envío a domicilio</option>
                        <option value="retiro">Retiro en local</option>
                        <option value="correo">Correo Argentino</option>
                        <option value="andreani">Andreani</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errores.entrega}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Aclaraciones (opcional)</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Horarios, instrucciones de entrega, etc."
                    />
                </Form.Group>

                <Button
                    type="submit"
                    variant="success"
                    size="lg"
                    className="w-100"
                    disabled={carrito.length === 0}
                >
                    Confirmar pedido
                </Button>

            </Form>
        </Container>
    );
}

export default CheckOut;