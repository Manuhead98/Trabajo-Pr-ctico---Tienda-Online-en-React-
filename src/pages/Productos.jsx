import { Container, Row, Col } from 'react-bootstrap';
import productos from '../data/productos';
import ProductCard from '../components/ProductCard';

function Productos() {

    console.log(productos);
    return (
        <Container className="mt-4">

            <h1 className="mb-4">
                Catálogo de Celulares
            </h1>

            <Row>

                {productos.map(producto => (

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