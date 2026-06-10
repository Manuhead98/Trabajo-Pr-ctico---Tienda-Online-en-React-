import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar({ darkMode, setDarkMode }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">

            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                >
                    CellStore
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/productos"
                        >
                            Productos
                        </Nav.Link>
                        <Nav.Link
                        as={Link}
                        to="/nosotros"
                        >
                        Nosotros
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/carrito"
                        >
                            Carrito
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/checkout"
                        >
                            Finalizar Compra
                        </Nav.Link>

                    </Nav>

                    <Button
                        variant={darkMode ? "light" : "outline-light"}
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </Button>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default NavBar;