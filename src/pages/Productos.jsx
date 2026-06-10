import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import productos from '../data/productos';
import ProductCard from '../components/ProductCard';

function Productos() {
    //estados para filtros
    const [busqueda, setBusqueda] = useState('');
    const [categoria, setCategoria] = useState('');

    //funcion filrar productos
    const productosFiltrados = productos.filter(producto => {

        const coincideNombre =
            producto.nombre
                .toLowerCase()
                .includes(busqueda.toLowerCase());

        const coincideCategoria =
            categoria === ''
                ? true
                : producto.categoria === categoria;

        return coincideNombre && coincideCategoria;
    });

    console.log(productos);
    return (
        <Container className="mt-4">

            <h1 className="mb-4">
                Catálogo de Celulares
            </h1>

            <Row className="mb-4">

                <Col md={6}>

                    <Form.Control
                        type="text"
                        placeholder="Buscar celular..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />

                </Col>

                <Col md={3}>

                    <Form.Select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >

                        <option value="">
                            Todas las marcas
                        </option>

                        <option value="Samsung">
                            Samsung
                        </option>

                        <option value="Apple">
                            Apple
                        </option>

                        <option value="Xiaomi">
                            Xiaomi
                        </option>

                        <option value="Motorola">
                            Motorola
                        </option>

                        <option value="Google">
                            Google
                        </option>

                    </Form.Select>

                </Col>

            </Row>

            <Row>

                {productosFiltrados.map(producto => (

                    <Col
                        key={producto.id}
                        lg={3}
                        md={4}
                        sm={6}
                        className="mb-4"
                    >

                        <ProductCard producto={producto} />

                    </Col>

                ))}

            </Row>

        </Container>
    );
}

export default Productos;