import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import productos from '../data/productos';
import ProductCard from '../components/ProductCard';

// componente para mostrar el catálogo de productos con filtros de búsqueda y categoría
//recibe la función agregarAlCarrito como prop para poder agregar productos al carrito desde la card
function Productos({ agregarAlCarrito, carrito }) {
    //estados para filtros
    const [busqueda, setBusqueda] = useState('');
    const [categoria, setCategoria] = useState('');
    //funcion filrar productos
    const productosFiltrados = productos.filter(producto => {
        const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoria === '' ? true : producto.categoria === categoria;
        return coincideNombre && coincideCategoria;
    });
    //console.log(productos);
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
                        //me permite controlar el valor del input
                        value={busqueda}
                        //cada vez que el usuario escriba algo, se actualiza el estado busqueda
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </Col>
                <Col md={3}>
                    <Form.Select
                        //controla el valor del select
                        value={categoria}
                        // cuando el usuario seleccione una categoria, se actualiza el estado categoria
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
                        <option value="Nothing">
                            Nothing
                        </option>
                    </Form.Select>
                </Col>

            </Row>
            <Row>
                {productosFiltrados.map(producto => (
                    <Col key={producto.id} lg={3} md={4} sm={6} className="mb-4">
                        <ProductCard
                            producto={producto}
                            agregarAlCarrito={agregarAlCarrito}
                            carrito={carrito}
                        />
                    </Col>))
                }
            </Row>
        </Container>
    );
}
//recorro el array de productos filtrados y muestro una card por cada producto, linea 65.
//le paso el producto como prop a la card y la función agregarAlCarrito para que la card pueda agregar el producto al carrito, linea 67. 

export default Productos;